import lyceesDataJson from './lyceesData.json';

// Types pour les données des lycées
export interface LyceePosition {
    lon: number;
    lat: number;
}

export interface Lycee {
    code_uai: string;
    num_siret: number;
    code_academie: string;
    academie: string;
    dep: string;
    sigle_uai: string;
    nature_uai: string;
    patronyme: string;
    nom_etablissement: string;
    statut: string;
    contrat_etablissement: string | null;
    adresse_postale: string;
    code_postal: string;
    code_insee: string;
    libelle: string;
    telephone: string;
    fax: string | null;
    site_web: string | null;
    mail: string | null;
    ministere_tutelle: string;
    internat: string | null;
    annee_construction: string | null;
    date_maj: string;
    position: LyceePosition;
}

// Export des données typées
export const lyceesData: Lycee[] = lyceesDataJson as Lycee[];
