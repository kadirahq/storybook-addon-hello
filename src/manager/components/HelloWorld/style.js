const SANS_SERIF_FONTS = [
  '-apple-system',
  '".SFNSText-Regular"',
  '"San Francisco"',
  'Roboto',
  '"Segoe UI"',
  '"Helvetica Neue"',
  '"Lucida Grande"',
  'sans-serif',
];

export default {
  wrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: SANS_SERIF_FONTS.join(', '),
    color: 'rgb(68, 68, 68)',
    fontSize: 12,
    letterSpacing: 1,
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
}
