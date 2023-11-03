<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use App\Repository\CategoryRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{

    /**
     * @throws \JsonException
     */
    #[Route('/', name: 'home')]
    public function index(Request $request, CategoryRepository $categoryRepo, ProductRepository $productRepository): Response
    {
         $req = json_decode($request->getContent(), true);

        $filter = $req['filter'] ?? null;
        $minRange = $productRepository->findOneBy([], ['price' => 'asc']) ? $productRepository->findOneBy([], ['price' => 'asc'])->getPrice() : 0;
        $maxRange = $productRepository->findOneBy([], ['price' => 'desc']) ? $productRepository->findOneBy([], ['price' => 'desc'])->getPrice() : 100;
        if (isset($req['minPrice'])) {
         /*   $minChoice = $request->get("minPrice") * 100;*/
            $minChoice = $req['minPrice'] * 100;
        } else {
            $minChoice = $minRange;
        }
        if (isset($req['maxPrice'])) {
            $maxChoice = $req['maxPrice'] * 100;
        } else {
            $maxChoice = $maxRange;
        }

        $categories = $categoryRepo->findAll();
        $categoriesChoice = $req["category"] ?? null;
        $products = $productRepository->findAllByFilters($filter, $minChoice, $maxChoice, $categoriesChoice);

        $dataProducts = [];
        foreach ($products as $product) {
            $dataProducts[] = [
                'id' => $product->getId(),
                'name' => $product->getName(),
                'description' => $product->getDescription(),
                'image' => $product->getImage(),
                'price' => $product->getPrice(),
                'quantity' => $product->getQuantity(),
                /*'categories' => $product->getCategories() ? [
                    'id' => $product->getCategories()->getId(),
                    'name' => $product->getCategories()->getName(),
                    'description' => $product->getCategories()->getDescription(),
                ] : null,*/

            ];
        }
        $data =  [
            "products" => $dataProducts,
            "categories" => $categories,
            "minRange" => $minRange,
            "maxRange" => $maxRange,
            "minChoice" => $minChoice,
            "maxChoice" => $maxChoice
        ];
        return new JsonResponse(["code" => 200, "data" => $data]);
    }
}
