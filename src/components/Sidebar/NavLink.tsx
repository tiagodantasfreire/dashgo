import { ElementType } from "react";
import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
