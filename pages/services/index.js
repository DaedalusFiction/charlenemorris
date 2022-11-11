import PageLayout from "../../components/layout/PageLayout";
import ServicesShowcase from "../../components/services/ServicesShowcase";
import { servicesContent } from "../../siteInfo";
const index = () => {
    return (
        <PageLayout name="OUR SERVICES">
            <ServicesShowcase services={servicesContent} />
        </PageLayout>
    );
};

export default index;
