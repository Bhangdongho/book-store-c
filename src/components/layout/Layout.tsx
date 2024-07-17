import styled from "styled-components";
import Footer from "../common/Footer";
import Header from "../common/Header";
import ThemeSwitcher from "../header/ThemeSwitcher";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <ThemeSwitcher />
      <LayoutStyle>{children}</LayoutStyle>
      <Footer />
    </>
  );
}

const LayoutStyle = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;
`;

export default Layout;
