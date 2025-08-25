"use client";
import BlogCard from "@/components/BlogCard/BlogCard";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import styled from "styled-components";
import image from "/public/images/blog1.jpg";
import image2 from "/public/images/blog2.jpg";
import image3 from "/public/images/blog3.jpg";

const S = {
  Header: styled.h2`
    margin-top: ${rem(100)};
    text-align: center;
    color: ${colors.BLACK};
    ${typography.H2}
  `,
  Blogs: styled.div`
    padding: ${rem(72)} 0 ${rem(100)} 0;
    display: flex;
    width: 100%;
    justify-content: space-between;

    gap: ${rem(32)};
  `,
};

export default function Blog() {
  return (
    <section>
      <S.Header>Latest Blog</S.Header>
      <MaxWidthWrapper>
        <S.Blogs>
          <BlogCard image={image} />
          <BlogCard image={image2} />
          <BlogCard image={image3} />
        </S.Blogs>
      </MaxWidthWrapper>
    </section>
  );
}
