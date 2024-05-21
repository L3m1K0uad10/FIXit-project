import json

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Domain


@csrf_exempt
def domain_view(request, pk = None, *args, **kwargs):
    
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))
            
            domain_name = data.get("domain_name")

            if domain_name is None:
                return JsonResponse({"error": "All fields are required"}, status = 400)
            
            # checking if the domain already exists
            if Domain.objects.filter(domain_name = domain_name).exists():
                return JsonResponse({"error": "Domain already exists"}, status=400)
            
            domain = Domain(domain_name = domain_name)
            domain.save()

            data = {
                "id": domain.id,
                "domain_name": domain.domain_name,
            }
            return JsonResponse(data, safe = False, status = 201)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    if request.method == "GET":
        if pk is not None:
            try:
                domain = Domain.objects.get(id = pk) 
                data = {
                    "id": domain.id,
                    "domain_name": domain.domain_name,
                }
                return JsonResponse(data, safe = False)
            except:
                return JsonResponse({"error": "Domain not found"}, status=404) 

        domains = Domain.objects.all()
        data = []
        for domain in domains:
            data.append({
                "id": domain.id,
                "domain_name": domain.domain_name,
            })
        return JsonResponse(data, safe = False)

    return JsonResponse({"error": "Method not allowed"}, status=405)