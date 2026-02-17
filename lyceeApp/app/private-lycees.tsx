import { StyleSheet, ScrollView, View, useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { getPrivateLyceesInParis } from '@/utils/lyceeUtils';
import { colors, spacing, borderRadius, shadows, typography } from '@/constants/theme';

export default function PrivateLyceesScreen() {
    const lycees = getPrivateLyceesInParis();
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Lycées Privés de Paris',
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
                    <ThemedText style={styles.emoji}>🏫</ThemedText>
                    <ThemedText style={[styles.count, { color: isDark ? colors.text.dark.secondary : colors.text.light.secondary }]}>
                        {lycees.length} lycées trouvés
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
                            <ThemedText style={styles.name}>{lycee.nom_etablissement}</ThemedText>

                            <View style={styles.infoRow}>
                                <ThemedText style={styles.icon}>📍</ThemedText>
                                <ThemedText style={[styles.info, { color: isDark ? colors.text.dark.secondary : colors.text.light.secondary }]}>
                                    {lycee.adresse_postale}, {lycee.code_postal} {lycee.libelle}
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

                            {lycee.mail && (
                                <View style={styles.infoRow}>
                                    <ThemedText style={styles.icon}>✉️</ThemedText>
                                    <ThemedText style={[styles.info, { color: colors.primary[600] }]}>
                                        {lycee.mail}
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
        lineHeight: 56,
        overflow: 'visible',
    },
    count: {
        fontSize: typography.fontSize.base,
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
    name: {
        fontSize: typography.fontSize.lg,
        fontWeight: typography.fontWeight.semibold,
        marginBottom: spacing.md,
        lineHeight: 24,
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
