export const interactive = (theme: any) => ({ transition: '.2s', cursor: 'pointer', '& * .img-wrapper img': { 'transition': '.3s ease-in-out' }, '&:hover *': { color: theme.colors[theme.primaryColor][Number(theme.primaryShade)], '& .img-wrapper img': { 'transform': 'scale(1.1)' } }, '&:focus': { border: `1px solid ${theme.colors[theme.primaryColor][theme.primaryShade]}` } })