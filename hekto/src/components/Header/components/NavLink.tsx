import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import { rem } from "@/utils/remConvert";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const S = {
  NavLink: styled(Link)<{ $isActive: boolean }>`
    color: ${({ $isActive }) => ($isActive ? colors.PRIMARY : colors.BLACK)};
    display: flex;
    align-items: flex-end;
    gap: ${rem(4)};
    ${typography.labelDefault}

    &:hover, &:focus {
      color: ${colors.PRIMARY};
    }
  `,
};

function NavLink({ href, children }: { href: string; children: string }) {
  const path = usePathname();
  const isActive = href === path;

  return (
    <S.NavLink href={href} $isActive={isActive}>
      {children}
    </S.NavLink>
  );
}

export default NavLink;
