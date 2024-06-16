import json

from django.shortcuts import render
from django.http import JsonResponse
from Professionals.models import Professional 
from django.conf import settings
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict # use to convert a model instance to dict
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


from Domains.models import Domain
from .models import Profile, ExperienceBackground
from .serializers import ProfessionalSerializer


# Get the custom user model
User = get_user_model()

@api_view(['GET', 'POST', 'PUT', 'DELETE']) 
def professional_view(request, pk=None, *args, **kwargs):

    if request.method == "POST": # create a professional profile
        serializer = ProfessionalSerializer(data = request.data)
        if serializer.is_valid():
            instance = serializer.save()
            response_serializer = ProfessionalSerializer(instance)
            data = response_serializer.data
            return Response(data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


    if request.method == "GET":
        if pk is not None:
            try:
                professional = Professional.objects.get(pk=pk)
                serializer = ProfessionalSerializer(professional)
                return Response(serializer.data)
            except Professional.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
        
        queryset = Professional.objects.all()
        serializer = ProfessionalSerializer(queryset, many=True)
        data = serializer.data
        return Response(data)
    
    if request.method == "PUT":
        if pk is not None:
            try:
                professional = Professional.objects.get(pk=pk)
                serializer = ProfessionalSerializer(professional, data=request.data, partial = True) # partial set to true give the leverage to handle partial updates, PATCH method can be used as well for partial update
                if serializer.is_valid():
                    instance = serializer.save()
                    response_serializer = ProfessionalSerializer(instance)
                    data = response_serializer.data
                    return Response(data, status = status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Professional.DoesNotExist:
                return Response({"detail": "Professional not found"}, status=status.HTTP_404_NOT_FOUND)
            
    if request.method == "DELETE":
        instance = get_object_or_404(Professional, pk=pk)
        instance.delete()
        return Response(status = status.HTTP_204_NO_CONTENT) # once delete the status code is 204 therefore No content, it is the Strict RESTful conventions(common way)

    return JsonResponse({"error": "Unsupported request method"}, status=405)


#@csrf_exempt
@api_view(['GET', 'POST', 'PUT', 'DELETE']) 
def profile_view(request, pk = None, *args, **kwargs):

    if request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))

            print(data)

            professional_id = data.get("professional")
            about = data.get("about")
            title = data.get("title")
            year_of_experience = data.get("year_of_experience")

            if professional_id is None or about is None or title is None or year_of_experience is None:
                return JsonResponse({"error": "All fields are required"}, status=400) 
            
            professional = Professional.objects.get(id = professional_id)

            profile = Profile(
                professional = professional,
                about = about,
                title = title,
                year_of_experience = year_of_experience,
            )
            profile.save()

            data = model_to_dict(profile)
            return JsonResponse(data, safe = True, status = 201)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
        except Professional.DoesNotExist:
            return JsonResponse({"error": "Professional not found"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
        
    if request.method == "GET":
        if pk is not None:
            try:
                profile = Profile.objects.get(id = pk)

                data = model_to_dict(profile)
                return JsonResponse(data, safe = False) # if the data is not a dictionary set safe to False
            except Profile.DoesNotExist:
                return JsonResponse({"error": "Profile not found"}, status=404)
            
    if request.method == "PUT":
        if pk is not None:
            try:
                data = json.loads(request.body.decode("utf-8"))

                profile = Profile.objects.get(id = pk)

                professional_id = data.get("professional")
                about = data.get("about")
                title = data.get("title")
                year_of_experience = data.get("year_of_experience")

                if professional_id is not None:
                    professional = Professional.objects.get(id = professional_id)
                    #print(profile.professional.id)
                    if professional_id != profile.professional.id:
                        return JsonResponse({"error": "Profile professional id can't be changed"})  
                    else:
                        profile.professional = professional                  
                if about is not None:
                    profile.about = about 
                if title is not None:
                    profile.title = title 
                if year_of_experience is not None:
                    profile.year_of_experience = year_of_experience

                profile.save()

                data = model_to_dict(profile)
                return JsonResponse(data, safe=False, status=200)
            except Professional.DoesNotExist:
                return JsonResponse({"error": "Professional not found"}, status=404)
            except json.JSONDecodeError:
                return JsonResponse({"error": "Invalid JSON"}, status=400)
            except Exception as e:
                return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Unsupported request method"}, status=405)

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def experience_bg_view(request, pk = None, professional_id = None, *args, **kwargs):

    if request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))

            worked_at = data.get("worked_at")
            duration = data.get("duration")
            title = data.get("title")
            assigned_work = data.get("assigned_work")
            profile = data.get("profile")

            if not all([worked_at, duration, title, assigned_work, profile is not None]):
                return JsonResponse({"error": "All fields are required"}, status=400)

            profile = Profile.objects.get(id = profile)
            
            experience_bg = ExperienceBackground(
                worked_at = worked_at,
                duration = duration,
                title = title,
                assigned_work = assigned_work,
                profile = profile,
            )
            experience_bg.save()

            data = model_to_dict(experience_bg)
            return JsonResponse(data, safe=False, status=201)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
        except ExperienceBackground.DoesNotExist:
            return JsonResponse({"error": "Experience Background not found"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500) 

    if request.method == "GET":
        if pk is not None:
            print(pk)
            try:
                experience_bg = ExperienceBackground.objects.get(id = pk) 
                data = model_to_dict(experience_bg)
                return JsonResponse(data, safe = False)
            except ExperienceBackground.DoesNotExist:
                return JsonResponse({"error": "Review not found"}, status=404)
            except:
                return JsonResponse({"error": "Review not found"}, status=404)

        if professional_id is not None:
            try:
                professional = Professional.objects.get(id = professional_id)
                profile = Profile.objects.get(professional = professional)
                experience_bgs = profile.experience_backgrounds.all()
                
                data = []
                for experience_bg in experience_bgs:
                    experience_bg_data = model_to_dict(experience_bg)
                    data.append(experience_bg_data)
                return JsonResponse(data, safe = False)
            except Professional.DoesNotExist:
                return JsonResponse({"error": "Professional not found"}, status=404)
            except Profile.DoesNotExist:
                return JsonResponse({"error": "Profile not found for this professional"}, status=404)
            except ExperienceBackground.DoesNotExist:
                return JsonResponse({"error": "Message not found"}, status=404)
            except:
                return JsonResponse({"error": "Message not found"}, status=404)

    if request.method == "PUT":
        if pk is not None:
            try:
                data = json.loads(request.body.decode("utf-8"))

                experience_bg = ExperienceBackground.objects.get(id = pk)

                worked_at = data.get("worked_at")
                duration = data.get("duration")
                title = data.get("title")
                assigned_work = data.get("assigned_work")
                 
                if worked_at is not None:
                    experience_bg.worked_at = worked_at
                if duration is not None:
                    experience_bg.duration = duration 
                if title is not None:
                    experience_bg.title = title 
                if assigned_work is not None:
                    experience_bg.assigned_work = assigned_work

                experience_bg.save()

                data = model_to_dict(experience_bg)
                return JsonResponse(data, safe=False, status=200)
            except json.JSONDecodeError:
                return JsonResponse({"error": "Invalid JSON"}, status=400)
            except ExperienceBackground.DoesNotExist:
                return JsonResponse({"error": "Experience background not found"}, status=404)
            except Exception as e:
                return JsonResponse({"error": str(e)}, status=500) 

    if request.method == "DELETE":
        obj = get_object_or_404(ExperienceBackground, id = pk)
        obj.delete()

        return JsonResponse({"message": "Experience Background deleted successfully"}, status = 200)

    return JsonResponse({"error": "Unsupported request method"}, status=405)