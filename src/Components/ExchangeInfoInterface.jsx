import React from 'react';
import { useTranslation } from 'react-i18next';

const styles = {
  MainCard: {
    width: '100%',
    maxWidth: '374px',
    backgroundColor: '#f2f2f2',
    borderRadius: '32px',
    position: 'relative',
    margin: '0 auto',
    padding: '23px 7px',
  },
  InputCard: {
    width: '100%',
    height: '56px',
    backgroundColor: '#e5e7eb',
    borderRadius: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 16px',
    marginBottom: '30px',
  },
  OutputCard: {
    width: '100%',
    height: '56px',
    backgroundColor: '#e5e7eb',
    borderRadius: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 16px',
    marginTop: '30px',
  },
  CurrencyCard: {
    width: '136px',
    height: '56px',
    backgroundColor: '#d1d5db',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '7px',
  },
  CurrencyCardSend: {
    top: '23px',
  },
  CurrencyCardGet: {
    bottom: '23px',
  },
  LabelText: {
    color: '#898b8d',
    fontSize: '10px',
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: 700,
    lineHeight: '14px',
    marginBottom: '2px',
  },
  AmountText: {
    color: '#000',
    fontSize: '16px',
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: 600,
  },
  CurrencyText: {
    color: '#000',
    fontSize: '12px',
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: 400,
    marginLeft: '8px',
  },
  FloatingRateText: {
    color: '#898b8d',
    fontSize: '9px',
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: 700,
    lineHeight: '12px',
    position: 'absolute',
    top: '50%',
    left: '50px',
    transform: 'translateY(-50%)',
  },
  Icon: {
    color: '#898b8d',
    fill: '#898b8d',
    fontSize: '16px',
    position: 'absolute',
    top: '50%',
    left: '28px',
    transform: 'translateY(-50%)',
    width: '16px',
    height: '22px',
  },
  CoinImage: {
    width: '24px',
    height: '24px',
    marginRight: '8px',
  },
};

const LabelText = ({ text }) => {
  return <div style={styles.LabelText}>{text}</div>;
};

const AmountText = ({ amount }) => {
  return <div style={styles.AmountText}>{amount}</div>;
};

const CurrencyText = ({ currency, symbol, image }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={image} alt={currency} style={styles.CoinImage} />
      <div>
        <div style={styles.CurrencyText}>{symbol.toUpperCase()}</div>
        <div style={{ ...styles.CurrencyText, fontSize: '10px', color: '#898b8d' }}>
          {currency}
        </div>
      </div>
    </div>
  );
};

const FloatingRateText = () => {
  const { t } = useTranslation();
  return <div style={styles.FloatingRateText}> { t("Floating Rate") }</div>
};

const IconComponent = () => (
  <svg style={styles.Icon} viewBox="0 0 448 512">
    <path d="M144 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80V144C80 64.47 144.5 0 224 0C281.5 0 331 33.69 354.1 82.27C361.7 98.23 354.9 117.3 338.1 124.9C322.1 132.5 303.9 125.7 296.3 109.7C283.4 82.63 255.9 64 224 64C179.8 64 144 99.82 144 144L144 192z"></path>
  </svg>
);

const ExchangeInfoInterface = ({ exchangeInfo }) => {
  const { t } = useTranslation(); 

  return (
    <div style={styles.MainCard}>
      <div style={styles.InputCard}>
        <LabelText text={t("You Send")} />
        <AmountText amount={exchangeInfo.fromCoinAmount} />
      </div>
      <div style={{ ...styles.CurrencyCard, ...styles.CurrencyCardSend }}>
        <CurrencyText
          currency={exchangeInfo.fromCoin.name}
          symbol={exchangeInfo.fromCoin.symbol}
          image={exchangeInfo.fromCoin.image}
        />
      </div>
      <div style={styles.OutputCard}>
        <LabelText text={t("You Get")} />
        <AmountText amount={exchangeInfo.toCoinAmount} />
      </div>
      <div style={{ ...styles.CurrencyCard, ...styles.CurrencyCardGet }}>
        <CurrencyText
          currency={exchangeInfo.toCoin.name}
          symbol={exchangeInfo.toCoin.symbol}
          image={exchangeInfo.toCoin.image}
        />
      </div>
      <IconComponent />
      <FloatingRateText />
    </div>
  );
};

export default ExchangeInfoInterface;
