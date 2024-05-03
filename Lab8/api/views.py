from django.http import JsonResponse

from api.models import Product, Category


# Create your views here.
def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse(product.to_json())
    except Product.DoesNotExist:
        return JsonResponse({'detail': 'Product not found'}, status=404)


def category_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)


def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(category.to_json())
    except Category.DoesNotExist:
        return JsonResponse({'detail': 'Category not found'}, status=404)


def product_list_by_category(request, id):
    products = Product.objects.filter(category_id=id)
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)
