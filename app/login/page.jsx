import Header from "@/components/Header";
import Link from "next/link";
import { Suspense } from "react";

const Login = () => {
  return (
    <div>
      <Suspense>
        <Header />
      </Suspense>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center p-6">
          <h1 className="text-2xl font-bold mb-4">Bienvenue !</h1>
          <p className="mb-8">Connectez-vous en tant que</p>

          <div className="space-y-10">
          <Link className="card border-2 border-black bg-white rounded-lg shadow-md p-4 cursor-pointer hover:bg-gray-200" href={"https://model.tunisian-pass.tn/auth/login"}>
              <div className="text-lg font-medium flex flex-row justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div className="ml-2"> Model</div>
              </div>
              <p className="text-gray-600">
                Vous êtes influenceur, createur de contenu ou mannequin
              </p>
            </Link>
            <Link className="card border-2 border-black bg-white rounded-lg shadow-md p-4 cursor-pointer hover:bg-gray-200" href={"https://business.tunisian-pass.tn/auth/login"}>
              <div className="text-lg font-medium flex flex-row justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-building-2"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  <path d="M10 6h4" />
                  <path d="M10 10h4" />
                  <path d="M10 14h4" />
                  <path d="M10 18h4" />
                </svg>{" "}
                <div className="ml-2"> Business</div>
              </div>
              <p className="text-gray-600">
                Vous êtes le représentant d&apos;une entreprise
              </p>
            </Link>
          </div>

          <p className="mt-4">
            Vous n&apos;avez pas de compte ?{" "}
            <Link href={"/sign-up"} className="font-bold underline">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
