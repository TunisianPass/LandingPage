"use client";
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

  const [showForm, setShowForm] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await formulaireFunction(formData);
    alert("Votre demande a bien été envoyée !");
  };

  return (
    <div className="p-8 rounded-md max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Envie d&apos;en savoir plus sur TunisianPass Fortune ?
      </h1>
      <p className="text-center mb-6">
        Toute l&apos;équipe TunisianPass se tient prête à répondre à vos
        questions et à vous accompagner dans votre projet.
      </p>
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="flex justify-center space-x-2 mb-2">
          <button
            onClick={() => setShowForm(true)}
            className={`btn ${showForm ? "btn-primary" : "btn-outline"}`}
          >
            Être rappelé
          </button>
          <button
            onClick={() => setShowForm(false)}
            className={`btn ${!showForm ? "btn-primary" : "btn-outline"}`}
          >
            Nous contacter
          </button>
        </div>
        <Link
          href={"https://cal.com/tunisian-pass/15min"}
          className="btn btn-outline"
        >
          Choisir un créneau
        </Link>
      </div>
      {showForm ? (
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
      ) : (
        <div className="mt-6 text-center space-y-4 text-gray-800 border shadow-lg p-4">
          <h2 className="font-bold text-2xl">Hedi Fourati</h2>
          <h2 className="text-xl">Responsable executif</h2>
          <div className="flex items-center justify-center gap-2">
            <a
              href="mailto:hedi.fourati@tunisian-pass.tn"
              className="text-blue-600 hover:underline"
            >
              hedi.fourati@tunisian-pass.tn
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <a
              href="tel:+21628655624"
              className="hover:underline text-blue-600"
            >
              +216 28 655 624
            </a>{" "}
            |{" "}
            <a
              href="tel:+21628732611"
              className="hover:underline text-blue-600"
            >
              +216 28 732 611
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SendMails;
