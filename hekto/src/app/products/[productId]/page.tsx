"use client";

import { Button } from "@/components/Buttons/Button";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/components/ProductCard/types";
import Stars from "@/components/Stars";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { fetchData } from "@/utils/fetchData";
import { rem } from "@/utils/remConvert";
import { Check, FavoriteBorderOutlined } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const S = {
  ProductContainer: styled.section`
    display: flex;
    align-items: center;
    gap: ${rem(64)};
    padding: ${rem(100)};
    width: 100%;
  `,
  ProductImageContainer: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `,
  ImageGalleryContainer: styled.aside`
    display: flex;
    flex-direction: column;
    margin-right: ${rem(32)};
    gap: ${rem(16)};
  `,
  MainImageContainer: styled.button`
    width: ${rem(528)};
    aspect-ratio: 1.42/1;
    border-radius: ${rem(8)};
    overflow: hidden;
    box-shadow: ${rem(8, 64, 80, -16)} rgba(${colors.BLACK_RGB}, 0.15);
  `,
  MainImage: styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  GalleryImageContainer: styled.button`
    max-width: ${rem(192)};
    aspect-ratio: 1.42/1;
    object-fit: cover;
    border-radius: ${rem(8)};
    overflow: hidden;

    &:hover {
      box-shadow: ${rem(0, 12, 32, -16)} rgba(${colors.BLACK_RGB}, 0.15);
    }
  `,
  GalleryImage: styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  ProductTitle: styled.h3`
    color: ${colors.BLACK};
    ${typography.H3}
  `,
  PriceContainer: styled.div`
    margin: ${rem(24)} 0;
  `,
  ProductPrice: styled.span`
    color: ${colors.BLACK};
    margin-right: ${rem(16)};
  `,
  ProductWasPrice: styled.span`
    color: ${colors.PRIMARY};
    text-decoration: line-through;
  `,
  ProductSubtitle: styled.p`
    color: ${colors.GREY_3};
    ${typography.bodyDefault}
    text-transform: capitalize;
    margin-bottom: ${rem(64)};
  `,
  CTAContainer: styled.div`
    display: flex;
    align-items: center;
    gap: ${rem(32)};
  `,
  DescriptionSection: styled.section`
    background-color: ${colors.GREY_1};
  `,
  DescriptionContainer: styled.div`
    display: flex;
    padding: ${rem(64)} ${rem(200)};
    flex-direction: column;
  `,
  DescriptionHeader: styled.div`
    display: flex;
    gap: ${rem(72)};
    margin-bottom: ${rem(52)};
  `,
  DescriptionHeaderItem: styled.p`
    ${typography.subtitleLarge}
  `,
  Content: styled.div``,
  ContentSubtitle: styled.p`
    ${typography.subtitleMedium}
    margin-bottom: ${rem(16)};
  `,
  ContentDescription: styled.p`
    margin-bottom: ${rem(32)};
    ${typography.bodyDefault}
    color: ${colors.GREY_3};
  `,
  ContentList: styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
  `,
  ContentListItem: styled.li`
    ${typography.bodyDefault}
    color: ${colors.GREY_3};
    display: flex;
    align-items: center;
    gap: ${rem(16)};
    margin-bottom: ${rem(16)};
  `,
  RelatedProducts: styled.section`
    display: flex;
    flex-direction: column;
    padding: ${rem(100)};
  `,
  RelatedProductsHeader: styled.h3`
    color: ${colors.BLACK};
    ${typography.H3}
  `,
  RelatedProductsContainer: styled.div`
    display: flex;
    gap: ${rem(32)};
  `,
};

export default function PDP({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const [product, setProduct] = useState<Product>();
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [mainImage, setMainImage] = useState("");

  function handleMainImage(image: string) {
    setMainImage(image);
  }

  useEffect(() => {
    async function fetchProduct() {
      const { productId } = await params;
      const data = await fetchData(
        `http://localhost:4000/products?id=${productId}`
      );
      setProduct(data[0]);
      setMainImage(data[0]?.thumbnail);
    }

    fetchProduct();
  }, [params]);

  useEffect(() => {
    async function fetchRelatedProducts() {
      if (!product?.brand) return;
      const data = await fetchData(
        `http://localhost:4000/products?brand=${product?.brand}&_limit=5`
      );
      setRelatedProducts(data);
    }

    fetchRelatedProducts();
  }, [product]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <MaxWidthWrapper>
        <S.ProductContainer>
          <S.ProductImageContainer>
            <S.ImageGalleryContainer>
              {product.imageSet.slice(0, 3).map((image) => (
                <S.GalleryImageContainer key={image}>
                  <S.GalleryImage
                    src={image}
                    alt="Gallery Image 1"
                    width={196}
                    height={136}
                    onClick={() => handleMainImage(image)}
                  />
                </S.GalleryImageContainer>
              ))}
            </S.ImageGalleryContainer>
            <S.MainImageContainer>
              <S.MainImage
                src={mainImage}
                alt={product?.name}
                width={528}
                height={438}
              />
            </S.MainImageContainer>
          </S.ProductImageContainer>
          <div>
            <S.ProductTitle>{product?.name}</S.ProductTitle>
            <Stars rating={Math.round(product.rating.value)} />
            <S.PriceContainer>
              <S.ProductPrice>${product?.price}</S.ProductPrice>
              <S.ProductWasPrice>${product?.wasPrice}</S.ProductWasPrice>
            </S.PriceContainer>
            <S.ProductSubtitle>{product?.description}</S.ProductSubtitle>
            <S.CTAContainer>
              <Button $variant="DEFAULT">Add to Cart</Button>
              <FavoriteBorderOutlined fontSize="small" />
            </S.CTAContainer>
          </div>
        </S.ProductContainer>
      </MaxWidthWrapper>
      <S.DescriptionSection>
        <MaxWidthWrapper>
          <S.DescriptionContainer>
            <S.DescriptionHeader>
              <S.DescriptionHeaderItem>Description</S.DescriptionHeaderItem>
              <S.DescriptionHeaderItem>Additional Info</S.DescriptionHeaderItem>
              <S.DescriptionHeaderItem>Reviews </S.DescriptionHeaderItem>
              <S.DescriptionHeaderItem>Video</S.DescriptionHeaderItem>
            </S.DescriptionHeader>
            <S.Content>
              <S.ContentSubtitle>Product Information</S.ContentSubtitle>
              <S.ContentDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
                libero consectetur. Pellentesque diam dolor, tincidunt nec ante
                congue, tincidunt facilisis tortor. Mauris vitae massa molestie,
                sagittis ligula vel, egestas massa. Phasellus quis sodales
                augue. Donec nec ultricies diam. Integer feugiat odio ut dictum
                viverra. Donec vehicula nisi placerat cursus mollis. Nunc
                aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis
                nisl sed dictum. Maecenas quam risus, congue quis accumsan at,
                imperdiet sed lectus. Aliquam in est purus
              </S.ContentDescription>
              <S.ContentSubtitle>Features</S.ContentSubtitle>
              <S.ContentList>
                <S.ContentListItem>
                  <Check />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac quam dolor. In dignissim lectus sed nisl tempor, ac
                  porttitor libero consectetur.
                </S.ContentListItem>
                <S.ContentListItem>
                  <Check />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac quam dolor. In dignissim lectus sed nisl tempor, ac
                  porttitor libero consectetur.
                </S.ContentListItem>
                <S.ContentListItem>
                  <Check />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac quam dolor. In dignissim lectus sed nisl tempor, ac
                  porttitor libero consectetur.
                </S.ContentListItem>
              </S.ContentList>
            </S.Content>
          </S.DescriptionContainer>
        </MaxWidthWrapper>
      </S.DescriptionSection>
      <MaxWidthWrapper>
        <S.RelatedProducts>
          <S.RelatedProductsHeader>Related Products</S.RelatedProductsHeader>
          <S.RelatedProductsContainer>
            {relatedProducts
              .filter((item) => item.id !== product.id)
              .map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  variant="FEATURED"
                />
              ))}
          </S.RelatedProductsContainer>
        </S.RelatedProducts>
      </MaxWidthWrapper>
    </main>
  );
}
