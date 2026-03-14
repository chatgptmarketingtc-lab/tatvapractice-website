import { HeroSection, LogoCarousel, UseCaseSection, StatsBar, CTASection, ProductHeroVisual } from '@/components/sections';

export const metadata = { title: 'GoodFlip — Health & Wellness App | TatvaCare' };

export default function GoodFlipPage() {
  return (
    <>
      <HeroSection
        tag="Health & Wellness App"
        title='Better health,<br/><em class="not-italic bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">one flip at a time.</em>'
        subtitle="GoodFlip helps users build lasting health habits through AI-powered coaching, gamified challenges, and community support."
        gradient="from-white via-emerald-50 to-emerald-100"
        buttons={[{ text: 'Download App →' }, { text: 'Learn More', variant: 'outline' }]}
        visual={<ProductHeroVisual icon="🍎" name="GoodFlip" desc="Health & Wellness App" iconBg="linear-gradient(135deg, #10b981, #059669)" pills={['AI Coach', 'Habits', 'Community', 'Tracking']} />}
      />
      <LogoCarousel />
      <UseCaseSection icon="🤖" name="AI Health Coach" desc="Personalized Guidance" iconBg="linear-gradient(135deg, #10b981, #059669)" category="Intelligent Coaching" title="Your AI health companion that learns and adapts." body="GoodFlip's AI coach analyzes your health data, habits, and goals to deliver personalized recommendations. It learns from your behavior and adapts its guidance over time." points={['Personalized nutrition and exercise recommendations', 'Adaptive coaching based on behavior patterns', 'Integration with wearables for real-time insights', 'Evidence-based health tips and reminders']} link="/zyvelor" linkText="Powered by Zyvelor AI →" />
      <UseCaseSection reverse icon="🎯" name="Habit Tracking" desc="Gamified Health Goals" iconBg="linear-gradient(135deg, #f59e0b, #d97706)" category="Engagement & Retention" title="Turn health goals into daily wins." body="Gamified challenges, streaks, and rewards make health management engaging. Track nutrition, exercise, sleep, and medication adherence with beautifully designed interfaces." points={['Daily health streaks and achievements', 'Custom challenge creation and sharing', 'Medication reminders with smart scheduling', 'Comprehensive health score tracking']} />
      <UseCaseSection icon="👥" name="Community" desc="Peer Support Network" iconBg="linear-gradient(135deg, #8b5cf6, #7c3aed)" category="Social Health" title="Health is better together." body="Connect with others on similar health journeys. Join condition-specific groups, share progress, and find motivation from peers who understand your challenges." points={['Condition-specific community groups', 'Anonymous sharing options for sensitive topics', 'Expert-moderated health discussions', 'Success stories and peer motivation']} />
      <StatsBar stats={[{ value: 100000, suffix: '+', label: 'Active Users' }, { value: 85, suffix: '%', label: 'Adherence Rate' }, { value: 4.7, suffix: '★', label: 'App Rating', decimals: 1 }, { value: 50, suffix: '+', label: 'Health Programs' }]} />
      <CTASection title="Start your health journey today" subtitle="Download GoodFlip and join a community of health-conscious individuals transforming their lives." />
    </>
  );
}
