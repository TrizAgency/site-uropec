import ClientContact from "./ClientContact";
import DistributorContact from "./DistributorContact";
import SurgeryContact from "./SurgeryContact";
import Tabs from "./Tabs";

export default function Contact() {
  return (
    <section className="lg:py-20 py-10" id="contato">
        <div className="container text-center flex flex-col items-start gap-10 lg:gap-14">
            <h2 className="uppercase font-bold text-center w-full text-xl text-light-green lg:text-3xl">
                Contato
            </h2>

            <Tabs 
                tabs={[
                    { 
                        title: "Quero ser um cliente Uropec", 
                        content: <ClientContact />
                    },
                    { 
                        title: "Quero ser um distribuidor Laptech", 
                        content: <DistributorContact /> 
                    },
                    {
                        title: "Quero fazer uma cirurgia",
                        content: <SurgeryContact />
                    }
                ]}
            />
        </div>
    </section>
  );
}