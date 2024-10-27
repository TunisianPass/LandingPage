'use client';
import { useState } from "react";
import { formulaireFunction } from "@/actions/send-mails";
import Link from "next/link";

const SendMails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    institution: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await formulaireFunction(formData);
    alert("Votre demande a bien été envoyée !");
  };

  return (
    <div className=" p-8 rounded-md max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Envie d&apos;en savoir plus sur TunisianPass Fortune ?
      </h1>
      <p className="text-center mb-6">
        Toute l&apos;équipe TunisianPass se tient prête à répondre à vos
        questions et à vous accompagner dans votre projet.
      </p>
      <div className="flex justify-center space-x-2 mb-6">
        <button className="btn btn-primary">Être rappelé</button>
        <Link href={'https://cal.com/tunisian-pass/15min'} className="btn btn-outline">Choisir un créneau</Link>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="Votre prénom"
          className="input input-bordered w-full"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Votre nom"
          className="input input-bordered w-full"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="institution"
          placeholder="Nom de votre établissement"
          className="input input-bordered w-full"
          value={formData.institution}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          className="input input-bordered w-full"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Téléphone"
          className="input input-bordered w-full"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary w-full">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default SendMails;
