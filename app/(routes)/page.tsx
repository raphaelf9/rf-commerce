import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0

const HomePage = async () => {

  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard("c9bcdcc4-adc8-4446-abfc-0f563ffe2348");
  return (
    <>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Produtos Disponíveis" items={products} />
          </div>
        </div>
      </Container>
    </>
  )
};

export default HomePage;