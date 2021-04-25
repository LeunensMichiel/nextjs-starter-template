import { Banner } from '@components/ui';
import { useAcceptCookies } from '@lib/hooks';

const CookieBanner = () => {
  const { shouldAskForCookies, onAcceptCookies } = useAcceptCookies();

  return (
    <Banner
      title="Nostrud ea aliquip excepteur occaecat eiusmod nulla nulla fugiat non fugiat dolore dolore officia."
      description="Ipsum dolor incididunt aliqua aliqua aliquip velit ut qui deserunt occaecat non culpa. Voluptate id occaecat nostrud ad veniam fugiat labore in ea sint cillum et in aliquip."
      open={shouldAskForCookies}
      icon="🍪"
      onClickConfirmingAction={() => onAcceptCookies(true)}
      onClickDismissiveAction={() => onAcceptCookies(false)}
      confirmTitle="Accept"
    />
  );
};

export default CookieBanner;
