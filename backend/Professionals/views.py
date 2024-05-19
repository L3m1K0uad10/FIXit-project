from django.shortcuts import render
from django.http import JsonResponse
from Professionals.models import Professional 
from django.contrib.auth.models import User
from .models import Domain
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
import json


@csrf_exempt
def professional_view(request, pk=None, *args, **kwargs):

    if request.method == "POST": # create a professional profile
        try:
            data = json.loads(request.body.decode("utf-8"))

            user_id = data.get("user")
            domain_id = data.get("domain")
            photo = data.get("photo")
            availability = data.get("availability")
            rating = data.get("rating")

            if not all([user_id, domain_id, photo, availability is not None, rating is not None]):
                return JsonResponse({"error": "All fields are required"}, status=400)
            
            user = User.objects.get(id = user_id)
            domain = Domain.objects.get(id = domain_id)

            professional = Professional(
                user = user,
                domain = domain,
                photo = photo,
                availability = availability,
                rating = rating
            )
            professional.save()

            data = {
                "id": professional.id,
                "user": {
                    "username": professional.user.username,
                    "email": professional.user.email,
                },
                "domain": professional.domain.domain_name,
                "photo": professional.photo,
                "availability": professional.availability,
                "rating": professional.rating,
            }
            return JsonResponse(data, safe=False, status=201)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
        except User.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=404)
        except Domain.DoesNotExist:
            return JsonResponse({"error": "Domain not found"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    if request.method == "GET":
        if pk is None:
            try:
                decoded_data = request.body.decode("utf-8") # django receives the request data in bytes type so we need to decode it
                data_dict = json.loads(decoded_data)
                pk = data_dict["id"]
            except (json.JSONDecodeError, KeyError, TypeError):
                pk = None

        if pk is not None:
            # Handling the detail view for a professional using URL parameter
            try:
                professional = Professional.objects.get(id=pk)
                data = {
                    "id": professional.id,
                    "user": {
                        "username": professional.user.username,
                        "email": professional.user.email,
                    },
                    "domain": professional.domain.domain_name,
                    "photo": professional.photo,
                    "availability": professional.availability,
                    "rating": professional.rating,
                }
                return JsonResponse(data, safe=False)
            except Professional.DoesNotExist:
                return JsonResponse({"error": "Professional not found"}, status=404)
        
        # Listing all professionals
        professionals = Professional.objects.all()
        data = []
        for professional in professionals:
            data.append({
                "id": professional.id,
                "user": {
                    "username": professional.user.username,
                    "email": professional.user.email,
                },
                "domain": professional.domain.domain_name,
                "photo": professional.photo,
                "availability": professional.availability,
                "rating": professional.rating,
            })
        return JsonResponse(data, safe=False)
    
    if request.method == "PUT":
        if pk is None:
            try:
                decoded_data = request.body.decode("utf-8")
                data_dict = json.loads(decoded_data)
                pk = data_dict["id"]
            except (json.JSONDecodeError, KeyError, TypeError):
                pk = None
        
        if pk is not None:
            try:
                data = json.loads(request.body.decode("utf-8"))

                professional = Professional.objects.get(id = pk)

                user_id = data.get("user")
                domain_id = data.get("domain")
                photo = data.get("photo")
                availability = data.get("availability")
                rating = data.get("rating")

                if user_id is not None:
                    professional.user = User.objects.get(id = user_id)
                if domain_id is not None:
                    professional.domain = Domain.objects.get(id = domain_id)
                if photo is not None:
                    professional.photo = photo 
                if availability is not None:
                    professional.availability = availability 
                if rating is not None:
                    professional.rating = rating 

                professional.save()

                data = {
                    "id": professional.id,
                    "user": {
                        "username": professional.user.username,
                        "email": professional.user.email,
                    },
                    "domain": professional.domain.domain_name,
                    "photo": professional.photo,
                    "availability": professional.availability,
                    "rating": professional.rating,
                }
                return JsonResponse(data, safe=False, status=200)
            except Professional.DoesNotExist:
                return JsonResponse({"error": "Professional not found"}, status=404)
            except json.JSONDecodeError:
                return JsonResponse({"error": "Invalid JSON"}, status=400)
            except User.DoesNotExist:
                return JsonResponse({"error": "User not found"}, status=404)
            except Domain.DoesNotExist:
                return JsonResponse({"error": "Domain not found"}, status=404)
            except Exception as e:
                return JsonResponse({"error": str(e)}, status=500)

    if request.method == "DELETE":
        obj = get_object_or_404(Professional, id = pk)
        obj.delete()

        return JsonResponse({"message": "professional resource deleted successfully"}, status = 200)

    return JsonResponse({"error": "Unsupported request method"}, status=405)
