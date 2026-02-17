import { StyleSheet, View, useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { getAcademieWithMostProfessionalLycees } from '@/utils/lyceeUtils';
import { colors, spacing, borderRadius, shadows, typography } from '@/constants/theme';

export default function MostProfessionalScreen() {
    const result = getAcademieWithMostProfessionalLycees();
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Top Professionnel',
                    headerStyle: {
                        backgroundColor: isDark ? colors.background.darkSecondary : colors.background.light,
                    },
                }}
            />
            <View style={[styles.container, { backgroundColor: isDark ? colors.background.dark : colors.background.lightSecondary }]}>
                <View style={styles.content}>
                    <ThemedText style={styles.emoji}>🎓</ThemedText>

                    <ThemedText style={[styles.label, { color: isDark ? colors.text.dark.tertiary : colors.text.light.tertiary }]}>
                        Académie la plus professionnelle
                    </ThemedText>

                    <View style={[
                        styles.resultCard,
                        {
                            backgroundColor: isDark ? colors.background.darkSecondary : colors.background.light,
                            borderColor: isDark ? colors.gray[700] : colors.gray[200],
                        }
                    ]}>
                        <ThemedText style={styles.academieName}>{result.academie}</ThemedText>

                        <View style={styles.statsContainer}>
                            <View style={[styles.statBadge, { backgroundColor: colors.primary[100] }]}>
                                <ThemedText style={[styles.statNumber, { color: colors.primary[700] }]}>
                                    {result.count}
                                </ThemedText>
                                <ThemedText style={[styles.statLabel, { color: colors.primary[600] }]}>
                                    lycées professionnels
                                </ThemedText>
                            </View>
                        </View>
                    </View>

                    <ThemedText style={[styles.description, { color: isDark ? colors.text.dark.tertiary : colors.text.light.tertiary }]}>
                        Cette académie compte le plus grand nombre de lycées professionnels dans la région
                    </ThemedText>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.xxl,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 64,
        marginBottom: spacing.lg,
    },
    label: {
        fontSize: typography.fontSize.base,
        marginBottom: spacing.xl,
        textAlign: 'center',
    },
    resultCard: {
        width: '100%',
        padding: spacing.xl,
        borderRadius: borderRadius.xl,
        ...shadows.md,
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: spacing.xl,
    },
    academieName: {
        fontSize: typography.fontSize['4xl'],
        fontWeight: typography.fontWeight.bold,
        marginBottom: spacing.lg,
        textAlign: 'center',
        letterSpacing: -1,
    },
    statsContainer: {
        width: '100%',
        alignItems: 'center',
    },
    statBadge: {
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.xl,
        borderRadius: borderRadius.full,
        alignItems: 'center',
    },
    statNumber: {
        fontSize: typography.fontSize['3xl'],
        fontWeight: typography.fontWeight.bold,
        marginBottom: spacing.xs,
    },
    statLabel: {
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
    },
    description: {
        fontSize: typography.fontSize.sm,
        textAlign: 'center',
        lineHeight: 20,
        paddingHorizontal: spacing.lg,
    },
});
