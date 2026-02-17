import { StyleSheet, ScrollView, View, useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { getLyceeCountByAcademie } from '@/utils/lyceeUtils';
import { colors, spacing, borderRadius, shadows, typography } from '@/constants/theme';

export default function AcademieCountScreen() {
    const academieData = getLyceeCountByAcademie();
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    const gradients = [
        ['#6366F1', '#8B5CF6'],
        ['#EC4899', '#F472B6'],
        ['#14B8A6', '#2DD4BF'],
    ];

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Statistiques par Académie',
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
                    <ThemedText style={styles.emoji}>📊</ThemedText>
                    <ThemedText style={[styles.subtitle, { color: isDark ? colors.text.dark.secondary : colors.text.light.secondary }]}>
                        Nombre de lycées par académie
                    </ThemedText>
                </View>

                <View style={styles.list}>
                    {academieData.map((item, index) => (
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
                            <View style={styles.cardContent}>
                                <View style={styles.academieInfo}>
                                    <ThemedText style={styles.academieName}>{item.academie}</ThemedText>
                                    <ThemedText style={[styles.academieSubtext, { color: isDark ? colors.text.dark.tertiary : colors.text.light.tertiary }]}>
                                        Académie
                                    </ThemedText>
                                </View>
                                <View style={[styles.badge, { backgroundColor: colors.primary[100] }]}>
                                    <ThemedText style={[styles.count, { color: colors.primary[700] }]}>
                                        {item.count}
                                    </ThemedText>
                                </View>
                            </View>
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
    subtitle: {
        fontSize: typography.fontSize.base,
        textAlign: 'center',
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
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    academieInfo: {
        flex: 1,
    },
    academieName: {
        fontSize: typography.fontSize.xl,
        fontWeight: typography.fontWeight.semibold,
        marginBottom: 2,
    },
    academieSubtext: {
        fontSize: typography.fontSize.sm,
    },
    badge: {
        minWidth: 56,
        height: 56,
        borderRadius: borderRadius.md,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: spacing.md,
    },
    count: {
        fontSize: typography.fontSize['2xl'],
        fontWeight: typography.fontWeight.bold,
    },
});
