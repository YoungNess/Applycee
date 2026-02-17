import { Lycee, lyceesData } from '../constants/lyceeData';

/**
 * Retourne la liste des lycées privés sous contrat de Paris
 */
export function getPrivateLyceesInParis(): Lycee[] {
    return lyceesData.filter(
        (lycee) =>
            lycee.statut === 'privé' &&
            lycee.dep === '75' &&
            lycee.contrat_etablissement?.includes('sous contrat')
    );
}

/**
 * Retourne le nombre de lycées par académie
 */
export function getLyceeCountByAcademie(): { academie: string; count: number }[] {
    const counts = new Map<string, number>();

    lyceesData.forEach((lycee) => {
        const current = counts.get(lycee.academie) || 0;
        counts.set(lycee.academie, current + 1);
    });

    const result = Array.from(counts.entries()).map(([academie, count]) => ({
        academie,
        count,
    }));

    // Trier par nombre décroissant
    return result.sort((a, b) => b.count - a.count);
}

/**
 * Retourne l'académie avec le plus de lycées professionnels
 */
export function getAcademieWithMostProfessionalLycees(): {
    academie: string;
    count: number;
} | null {
    const counts = new Map<string, number>();

    lyceesData.forEach((lycee) => {
        if (lycee.nature_uai.toLowerCase().includes('professionnel')) {
            const current = counts.get(lycee.academie) || 0;
            counts.set(lycee.academie, current + 1);
        }
    });

    let maxAcademie: string | null = null;
    let maxCount = 0;

    counts.forEach((count, academie) => {
        if (count > maxCount) {
            maxCount = count;
            maxAcademie = academie;
        }
    });

    if (maxAcademie === null) return null;

    return {
        academie: maxAcademie,
        count: maxCount,
    };
}

/**
 * Retourne les adresses mail des lycées de Créteil
 */
export function getCreteilLyceeEmails(): { nom_etablissement: string; mail: string }[] {
    return lyceesData
        .filter((lycee) => lycee.academie === 'Créteil' && lycee.mail !== null)
        .map((lycee) => ({
            nom_etablissement: lycee.nom_etablissement,
            mail: lycee.mail!,
        }));
}

/**
 * Retourne les lycées de Créteil mis à jour en 2026
 */
export function getCreteilLyceesUpdated2026(): Lycee[] {
    return lyceesData.filter(
        (lycee) =>
            lycee.academie === 'Créteil' && lycee.date_maj.startsWith('2026')
    );
}
