import { StyleSheet, ScrollView, Pressable, View, useColorScheme } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { colors, spacing, borderRadius, shadows, typography } from '@/constants/theme';

const menuItems = [
  {
    href: '/private-lycees',
    icon: '🏫',
    title: 'Lycées Privés',
    subtitle: 'Paris',
    gradient: ['#6366F1', '#8B5CF6'],
  },
  {
    href: '/academie-count',
    icon: '📊',
    title: 'Statistiques',
    subtitle: 'Par académie',
    gradient: ['#EC4899', '#F472B6'],
  },
  {
    href: '/most-professional',
    icon: '🎓',
    title: 'Top Professionnel',
    subtitle: 'Meilleure académie',
    gradient: ['#14B8A6', '#2DD4BF'],
  },
  {
    href: '/creteil-emails',
    icon: '✉️',
    title: 'Contacts',
    subtitle: 'Emails Créteil',
    gradient: ['#F59E0B', '#FB923C'],
  },
  {
    href: '/creteil-2026',
    icon: '📅',
    title: 'Mises à jour',
    subtitle: 'Créteil 2026',
    gradient: ['#3B82F6', '#60A5FA'],
  },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: isDark ? colors.background.dark : colors.background.light }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Header with gradient */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <ThemedText style={styles.headerIcon}>🎓</ThemedText>
          </View>
          <ThemedText style={styles.title}>LyceeApp</ThemedText>
          <ThemedText style={[styles.subtitle, { color: isDark ? colors.text.dark.secondary : colors.text.light.secondary }]}>
            Découvrez les lycées d'Île-de-France
          </ThemedText>
        </View>
      </View>

      {/* Menu Cards */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href as any} asChild>
            <Pressable
              style={({ pressed }) => [
                styles.menuCard,
                pressed && styles.menuCardPressed,
              ]}
            >
              <View style={styles.cardContent}>
                <View style={styles.cardLeft}>
                  <View style={[styles.iconBadge, { backgroundColor: isDark ? colors.gray[800] : colors.gray[100] }]}>
                    <ThemedText style={styles.cardIcon}>{item.icon}</ThemedText>
                  </View>
                  <View style={styles.cardText}>
                    <ThemedText style={styles.cardTitle}>{item.title}</ThemedText>
                    <ThemedText style={[styles.cardSubtitle, { color: isDark ? colors.text.dark.tertiary : colors.text.light.tertiary }]}>
                      {item.subtitle}
                    </ThemedText>
                  </View>
                </View>
                <View style={styles.arrow}>
                  <ThemedText style={{ fontSize: 20, opacity: 0.4 }}>→</ThemedText>
                </View>
              </View>
            </Pressable>
          </Link>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <ThemedText style={[styles.footerText, { color: isDark ? colors.text.dark.tertiary : colors.text.light.tertiary }]}>
          75 lycées • 3 académies
        </ThemedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xl,
  },
  header: {
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  headerIcon: {
    fontSize: 40,
  },
  title: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing.sm,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    textAlign: 'center',
    lineHeight: 24,
  },
  menuContainer: {
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
    paddingBottom: spacing.xl,
  },
  menuCard: {
    backgroundColor: 'white',
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    ...shadows.sm,
    borderWidth: 1,
    borderColor: colors.gray[200],
  },
  menuCardPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconBadge: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  cardIcon: {
    fontSize: 28,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: typography.fontSize.sm,
  },
  arrow: {
    marginLeft: spacing.sm,
  },
  footer: {
    paddingVertical: spacing.xl,
    alignItems: 'center',
  },
  footerText: {
    fontSize: typography.fontSize.sm,
  },
});
