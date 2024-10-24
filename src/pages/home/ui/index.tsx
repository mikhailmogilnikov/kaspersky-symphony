import { View } from '@/shared/ui/view';
import { CallToActionSection } from '@/widgets/call-to-action';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { HeroSection } from '@/widgets/hero';
import { PrizesSection } from '@/widgets/prizes';

export const HomePage = () => {
  return (
    <View vertical className='overflow-x-hidden'>
      <View vertical className='max-w-layout container mx-auto px-4'>
        <Header />
        <HeroSection />
      </View>
      <View vertical className='container mx-auto px-4'>
        <PrizesSection />
        <CallToActionSection />
        <Footer />
      </View>
    </View>
  );
};
