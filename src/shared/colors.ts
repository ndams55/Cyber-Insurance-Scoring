export const PRIMARY = '#512da8';
export const SECONDARY = '#fdd835';

export const SEMIDARK = '#404e67';

export const getColor = (value: string) => {
  if (value === 'en_attente_selection') {
    return 'purple';
  } else if (value === 'valide') {
    return 'green';
  } else if (value === 'en_attente_vente') {
    return 'blue';
  } else if (value === 'refuse') {
    return '#FF0000';
  } else if (value === 'rejete') {
    return '#7B0000';
  } else if (value === 'en_vente') {
    return 'cyan';
  } else if (value === 'vendu') {
    return 'lime';
  } else if (value === 'retourne') {
    return 'volcano';
  } else if (value === 'livre') {
    return 'green';
  } else if (value === 'en_cours') {
    return 'green';
  } else if (value === 'termine') {
    return 'blue';
  } else if (value === 'pas_commence') {
    return '#9c27b0';
  }
};

export const COLORS = [
  '#f56a00',
  '#8e24aa',
  '#ff5252',
  '#ff9800',
  '#4caf50 ',
  '#03a9f4',
  '#f44336',
  '#b71c1c',
];
