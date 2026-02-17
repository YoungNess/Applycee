import { StyleSheet, ScrollView, View, useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { getCreteilLyceesUpdated2026 } from '@/utils/lyceeUtils';
import { colors, spacing, borderRadius, shadows, typography } from '@/constants/theme';

export default function Creteil2026Screen() {
    const lycees = getCreteilLyceesUpdated2026();
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Mises à jour 2026',
                    headerStyle: {
                        backgroundColor: isDark ? colors.background.darkSecondary : colors.background.light,
                    },
                }}
            />
            <ScrollView
                style={[styles.container, { backgroundColor: isDark ? colors.background.dark : colors.background.lightSecondary }]}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <ThemedText style={styles.emoji}>📅</ThemedText>
                    <ThemedText style={[styles.subtitle, { color: isDark ? colors.text.dark.secondary : colors.text.light.secondary }]}>
                        Lycées de Créteil mis à jour en 2026
                    </ThemedText>
                    <ThemedText style={[styles.count, { color: isDark ? colors.text.dark.tertiary : colors.text.light.tertiary }]}>
                        {lycees.length} établissements
                    </ThemedText>
                </View>

                <View style={styles.list}>
                    {lycees.map((lycee, index) => (
                        <View
                            key={index}
                            style={[
                                styles.card,
                                {
                                    backgroundColor: isDark ? colors.background.darkSecondary : colors.background.light,
                                    borderColor: isDark ? colors.gray[700] : colors.gray[200],
                                }
                            ]}
                        >
                            <View style={styles.cardHeader}>
                                <ThemedText style={styles.name}>{lycee.nom_etablissement}</ThemedText>
                                <View style={[styles.dateBadge, { backgroundColor: colors.primary[100] }]}>
                                    <ThemedText style={[styles.dateText, { color: colors.primary[700] }]}>
                                        {formatDate(lycee.date_maj)}
                                    </ThemedText>
                                </View>
                            </View>

                            <View style={styles.infoRow}>
                                <ThemedText style={styles.icon}>📍</ThemedText>
                                <ThemedText style={[styles.info, { color: isDark ? colors.text.dark.secondary : colors.text.light.secondary }]}>
                                    {lycee.adresse_postale}, {lycee.code_postal} {lycee.libelle}
                                </ThemedText>
                            </View>

                            <View style={styles.infoRow}>
                                <ThemedText style={styles.icon}>🏫</ThemedText>
                                <ThemedText style={[styles.info, { color: isDark ? colors.text.dark.secondary : colors.text.light.secondary }]}>
                                    {lycee.nature_uai}
                                </ThemedText>
                            </View>

                            {lycee.telephone && (
                                <View style={styles.infoRow}>
                                    <ThemedText style={styles.icon}>📞</ThemedText>
                                    <ThemedText style={[styles.info, { color: isDark ? colors.text.dark.secondary : colors.text.light.secondary }]}>
                                        {lycee.telephone}
                                    </ThemedText>
                                </View>
                            )}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: spacing.xl,
        paddingHorizontal: spacing.lg,
        paddingBottom: spacing.lg,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 48,
        marginBottom: spacing.sm,
    },
    subtitle: {
        fontSize: typography.fontSize.base,
        textAlign: 'center',
        marginBottom: spacing.xs,
    },
    count: {
        fontSize: typography.fontSize.sm,
    },
    list: {
        paddingHorizontal: spacing.lg,
        paddingBottom: spacing.xl,
        gap: spacing.md,
    },
    card: {
        padding: spacing.lg,
        borderRadius: borderRadius.lg,
        ...shadows.sm,
        borderWidth: 1,
    },
    cardHeader: {
        marginBottom: spacing.md,
    },
    name: {
        fontSize: typography.fontSize.lg,
        fontWeight: typography.fontWeight.semibold,
        marginBottom: spacing.sm,
        lineHeight: 24,
    },
    dateBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        borderRadius: borderRadius.full,
    },
    dateText: {
        fontSize: typography.fontSize.xs,
        fontWeight: typography.fontWeight.medium,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: spacing.sm,
    },
    icon: {
        fontSize: 16,
        marginRight: spacing.sm,
        marginTop: 2,
    },
    info: {
        fontSize: typography.fontSize.sm,
        flex: 1,
        lineHeight: 20,
    },
});
