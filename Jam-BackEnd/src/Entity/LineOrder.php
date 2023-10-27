<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\LineOrderRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: LineOrderRepository::class)]
#[ApiResource]
class LineOrder
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    #[Assert\NotBlank]
    private $quantity;

    #[ORM\Column(type: 'float')]
    #[Assert\NotBlank]
    private $subtotal;

    #[ORM\ManyToOne(targetEntity: Order::class, inversedBy: 'lineOrders')]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotBlank]
    private $order_associated;

    #[ORM\ManyToOne(targetEntity: Product::class)]
    #[ORM\JoinColumn(nullable: false,onDelete:"CASCADE")]
    #[Assert\NotBlank]
    private $product;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getSubtotal(): ?float
    {
        return $this->subtotal;
    }

    public function setSubtotal(float $subtotal): self
    {
        $this->subtotal = $subtotal;

        return $this;
    }

    public function getOrderAssociated(): ?Order
    {
        return $this->order_associated;
    }

    public function setOrderAssociated(?Order $order_associated): self
    {
        $this->order_associated = $order_associated;

        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): self
    {
        $this->product = $product;

        return $this;
    }
    public function __toString(){
        return $this->quantity." ".$this->product->getName();
    }
}
