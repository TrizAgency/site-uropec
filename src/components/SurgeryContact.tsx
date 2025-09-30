"use client";

import Image from "next/image";
import { useState } from "react";

export default function SurgeryContact() {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [cnpjFile, setCnpjFile] = useState<string>("");
    // const [anvisaFile, setAnvisaFile] = useState<string>("");
    // const [enderecoFile, setEnderecoFile] = useState<string>("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        setLoading(true);
        event.preventDefault();
    
        // if (!captchaToken) {
        // setLoading(false);
        // alert("Por favor, complete o captcha.");
        // return;
        // }
    
        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("access_key", "");
        // formData.append("h-captcha-response", captchaToken);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        });
    
        const result = await response.json();
        if (result.success) {
        setLoading(false);
        console.log(result);
        setSuccess(true);
        } else {
        setLoading(false);
        console.log(result);
        setError(true);
        }
    }

    return (
        <div className="bg-white lg:pr-6 py-10 lg:rounded-[67px] rounded-4xl rounded-t-none lg:rounded-t-[67px] lg:rounded-tl-none flex lg:justify-between">
            {/* <Image src="/imagem-contato-1.png" alt="Contato" width={549} height={708} quality={100} className="hidden lg:block shrink-0 object-cover" /> */}

            <div className="relative flex flex-col items-start rounded-3xl lg:px-6 px-4 lg:py-8 m-auto bg-white lg:w-auto w-full">
                    {error && <p className="text-center px-12 text-[#9D9BA0] text-lg lg:text-2xl">Ocorreu um erro ao enviar sua mensagem. <br />  Por favor, tente novamente mais tarde.</p>}
                    {success && <p className="text-center px-12 text-green text-lg lg:text-2xl">Obrigado! <br /> Seus dados foram enviados com sucesso.</p>}
                    {!error && !success && (
                        <div className="flex flex-col gap-5 w-full lg:w-auto">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-5 w-full lg:min-w-[370px]">
                                <input type="hidden" name="subject" value="Novo lead recebido" />
                                <input type="hidden" name="from_name" value="uropec.com.br" />

                                {/* <div className="bg-white flex justify-between gap-3 items-center rounded-full pl-5 pr-3 py-1.5 border-2 border-dark-green outline-dark-green placeholder:text-blue">
                                    <label htmlFor="cnpj" className="text-blue">CNPJ</label>
                                    <label htmlFor="cnpj" className="bg-light-green rounded-full px-3 py-1 outline-dark-green text-white cursor-pointer flex items-center">
                                        {cnpjFile ? cnpjFile : "Carregar arquivo"}
                                        <input
                                            required
                                            type="file"
                                            name="cnpj"
                                            id="cnpj"
                                            className="hidden"
                                            onChange={e => setCnpjFile(e.target.files?.[0]?.name || "")}
                                        />
                                    </label>
                                </div>

                                <div className="bg-white flex justify-between gap-3 items-center rounded-full pl-5 pr-3 py-1.5 border-2 border-dark-green outline-dark-green placeholder:text-blue">
                                    <label htmlFor="anvisa" className="text-blue">Anvisa</label>
                                    <label htmlFor="anvisa" className="bg-light-green rounded-full px-3 py-1 outline-dark-green text-white w-fit cursor-pointer flex items-center">
                                        {anvisaFile ? anvisaFile : "Carregar arquivo"}
                                        <input
                                            required
                                            type="file"
                                            name="anvisa"
                                            id="anvisa"
                                            className="hidden"
                                            onChange={e => setAnvisaFile(e.target.files?.[0]?.name || "")}
                                        />
                                    </label>
                                </div>

                                <div className="bg-white flex justify-between gap-3 items-center rounded-full pl-5 pr-3 py-1.5 border-2 border-dark-green outline-dark-green placeholder:text-blue">
                                    <label htmlFor="endereco" className="text-blue">Endereço</label>
                                    <label htmlFor="endereco" className="bg-light-green rounded-full px-3 py-1 outline-dark-green text-white w-fit cursor-pointer flex items-center">
                                        {enderecoFile ? enderecoFile : "Carregar arquivo"}
                                        <input
                                            required
                                            type="file"
                                            name="endereco"
                                            id="endereco"
                                            className="hidden"
                                            onChange={e => setEnderecoFile(e.target.files?.[0]?.name || "")}
                                        />
                                    </label>
                                </div> */}
                                <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 w-full">
                                    <div className="flex flex-col gap-4 lg:gap-5 w-full">
                                        <input required type="text" name="Nome" placeholder="Nome" className="bg-white rounded-full px-5 py-2 border-2 border-dark-green outline-dark-green placeholder:text-blue" minLength={3} maxLength={50} />

                                        <input required type="tel" name="Telefone" placeholder="Telefone" className="bg-white rounded-full px-5 py-2 border-2 border-dark-green outline-dark-green placeholder:text-blue" minLength={8} maxLength={20} />

                                        <input required type="email" name="E-mail" placeholder="E-mail" className="bg-white rounded-full px-5 py-2 border-2 border-dark-green outline-dark-green placeholder:text-blue" maxLength={50} />
                                    </div>

                                    <div className="flex flex-col gap-4 lg:gap-5 w-full">
                                        <input required type="text" name="Cpf" placeholder="CPF" className="bg-white rounded-full px-5 py-2 border-2 border-dark-green outline-dark-green placeholder:text-blue" minLength={11} maxLength={20} />

                                        <input required type="text" name="Convenio" placeholder="Convênio" className="bg-white rounded-full px-5 py-2 border-2 border-dark-green outline-dark-green placeholder:text-blue" minLength={3} maxLength={50} />

                                        <input required type="text" name="Cidade" placeholder="Cidade" className="bg-white rounded-full px-5 py-2 border-2 border-dark-green outline-dark-green placeholder:text-blue" minLength={2} maxLength={50} />
                                    </div>
                                </div>

                                <p className="text-blue text-start ml-5">Caso já esteja sendo acompanhado por algum médico, preencha os campos a seguir:</p>

                                <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 w-full">
                                    <input required type="text" name="Medico" placeholder="Médico" className="bg-white rounded-full px-5 py-2 border-2 border-dark-green outline-dark-green placeholder:text-blue lg:w-1/2" minLength={3} maxLength={50} />

                                    <input required type="text" name="Hospital" placeholder="Hospital" className="bg-white rounded-full px-5 py-2 border-2 border-dark-green outline-dark-green placeholder:text-blue lg:w-1/2" minLength={8} maxLength={20} />
                                </div>
                                
                                    
                                <p className="text-blue text-start ml-5">Área de interesse:</p>
                                <ul className="flex flex-col lg:flex-row items-start lg:items-center ml-5 select-none text-blue">
                                    <li>
                                        <input type="checkbox" name="Area-1" value="Urologia" className="accent-blue w-4 h-4" id="1" />
                                        <label htmlFor="1" className="ml-2 mr-4">Urologia</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="Area-2" value="Bariátrica" className="accent-blue w-4 h-4" id="2" />
                                        <label htmlFor="2" className="ml-2 mr-4">Bariátrica</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="Area-3" value="Ginecologia" className="accent-blue w-4 h-4" id="3" />
                                        <label htmlFor="3" className="ml-2 mr-4">Ginecologia</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="Area-4" value="Cirurgia Geral" className="accent-blue w-4 h-4" id="4" />
                                        <label htmlFor="4" className="ml-2 mr-4">Cirurgia Geral</label>
                                    </li>
                                </ul>

                                <textarea required name="mensagem" placeholder="Mensagem" rows={4} className="bg-white rounded-3xl px-5 py-2 border-2 border-dark-green outline-dark-green resize-none placeholder:text-[#9D9BA0]" maxLength={1000} />

                                <button 
                                    disabled={loading} 
                                    type="submit" 
                                    className="bg-light-green rounded-full px-14 py-3 lg:self-end self-center cursor-pointer text-white hover:bg-white hover:text-dark-green border-2 border-light-green font-bold transition-all duration-300 outline-primary disabled:opacity-50 disabled:cursor-default disabled:pointer-events-none flex items-center gap-3 leading-tight text-start"
                                >
                                    {!error && !success && !loading && <p>Enviar</p>}
                                    {loading && 'Enviando...' }
                                </button>
                                <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />
                            </form>
                        </div>
                    )}
                </div>
        </div>
    );
}