
  
  export default function ParagraphStyle({
    capture,
    is14Inch,
    is15Inch,
    dir,
  }) {
    return {
      fontSize: {
        lg: capture
          ? is14Inch || is15Inch
            ? '20px'
            : '24px'
          : is14Inch || is15Inch
          ? '24px'
          : '27px',
        md: capture ? '18px' : '22px',
        sm: capture ? '16px' : '20px',
        xs: '15px',
      },
      fontFamily: 'var(--English-font)',
      overflow: 'auto',
      maxHeight: {
        lg: is14Inch ? '220px' : is15Inch ? '240px' : '300px',
        md: '220px',
        sm: '220px',
        xs: '220px',
      },
      paddingRight: '10px',
      paddingTop: {
        lg: is14Inch || is15Inch ? '0px' : capture ? '0px' : '10px',
        md: '0px',
        sm: '4px',
        xs: '4px',
      },
      position: 'relative',
      '&::-webkit-scrollbar': { display: 'none' },
      scrollbarWidth: 'none',
      display: 'flex',
      flexDirection: 'column',
      textAlign: dir === 'rtl' ? 'right' : 'left',
      zIndex: 2,
    };
  }
  