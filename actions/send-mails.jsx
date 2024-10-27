"use server"
import { EmailTemplate } from './contact';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const formulaireFunction = async (infos) => {
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@tunisian-pass.tn>',
        to: ["hfourati2007@gmail.com", "gnc.ytb@gmail.com"],
        subject: 'Demande de rdv',
        react: EmailTemplate({ firstName: infos.firstName, lastName: infos.lastName, institution: infos.institution, email: infos.email, phone: infos.phone }),
    });

    if (error) {
        return { error: error, success: false };
    }

    return { success: true, data };
}
