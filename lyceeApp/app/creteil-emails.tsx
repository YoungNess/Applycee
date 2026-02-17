import { StyleSheet, ScrollView, View, Linking, Pressable, useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { getCreteilLyceeEmails } from '@/utils/lyceeUtils';
import { colors, spacing, borderRadius, shadows, typography } from '@/constants/theme';

export default function CreteilEmailsScreen() {
    const lycees = getCreteilLyceeEmails();
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    const handleEmailPress = (email: string) => {
        Linking.openURL(`mailto:${email}`);
    };

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Contacts Créteil',
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
                    <ThemedText style={styles.emoji}>✉️</ThemedText>
                    <ThemedText style={[styles.count, { color: isDark ? colors.text.dark.secondary : colors.text.light.secondary }]}>
                        {lycees.length} adresses email
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

                            {lycee.mail && (
                                <Pressable
                                    onPress={() => handleEmailPress(lycee.mail!)}
                                    style={({ pressed }) => [
                                        styles.emailButton,
                                        { backgroundColor: colors.primary[50] },
                                        pressed && { opacity: 0.7 }
                                    ]}
                                >
                                    <ThemedText style={styles.emailIcon}>📧</ThemedText>
                                    <ThemedText style={[styles.email, { color: colors.primary[700] }]}>
                                        {lycee.mail}
                                    </ThemedText>
                                </Pressable>
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
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.semibold,
        marginBottom: spacing.md,
        lineHeight: 22,
    },
    emailButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing.md,
        borderRadius: borderRadius.md,
    },
    emailIcon: {
        fontSize: 18,
        marginRight: spacing.sm,
    },
    email: {
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
        flex: 1,
    },
});
