import React from 'react';

const icons = {
  add: {
    path: (
      <path d="M20 13.1429H13.1429V20H10.8571V13.1429H4V10.8571H10.8571V4H13.1429V10.8571H20V13.1429Z" />
    ),
  },
  adduser: {
    path: (
      <path d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C12.79 4 11 5.79 11 8C11 10.21 12.79 12 15 12ZM6 10V7H4V10H1V12H4V15H6V12H9V10H6ZM15 14C12.33 14 7 15.34 7 18V20H23V18C23 15.34 17.67 14 15 14Z" />
    ),
  },
  alert: {
    path: (
      <React.Fragment>
        <path d="M4,19V5H15.5V9h2V5a2,2,0,0,0-2-2H4A2,2,0,0,0,2,5V19a2,2,0,0,0,2,2H9V19H4Z" />
        <path d="M20 11H13a2 2 0 00-2 2v7a2 2 0 002 2h7a2 2 0 002-2V13A2 2 0 0020 11zm-2.75 9h-1.5V18.5h1.5zm0-3.15h-1.5v-4h1.5zM6 15.01H9V17.009999999999998H6zM6 11H9V13H6zM6 7H13.5V9H6z" />
      </React.Fragment>
    ),
  },
  'caret-down': {
    path: <path d="M7 10L12 15L17 10H7Z" />,
  },
  'caret-up': {
    path: <path d="M7 14L12 9L17 14H7Z" />,
  },
  'caret-left': {
    path: <path d="M14 7L9 12L14 17V7Z" />,
  },
  'caret-right': {
    path: <path d="M10 17L15 12L10 7V17Z" />,
  },
  'arrow-back': {
    path: <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" />,
  },
  billing: {
    path: (
      <path d="M11.7999 10.9C9.52995 10.31 8.79995 9.7 8.79995 8.75C8.79995 7.66 9.80995 6.9 11.4999 6.9C13.2799 6.9 13.9399 7.75 13.9999 9H16.2099C16.1399 7.28 15.0899 5.7 12.9999 5.19V3H9.99995V5.16C8.05995 5.58 6.49995 6.84 6.49995 8.77C6.49995 11.08 8.40995 12.23 11.1999 12.9C13.6999 13.5 14.1999 14.38 14.1999 15.31C14.1999 16 13.7099 17.1 11.4999 17.1C9.43995 17.1 8.62995 16.18 8.51995 15H6.31995C6.43995 17.19 8.07995 18.42 9.99995 18.83V21H12.9999V18.85C14.9499 18.48 16.4999 17.35 16.4999 15.3C16.4999 12.46 14.0699 11.49 11.7999 10.9Z" />
    ),
  },
  wrench: {
    path: (
      <path d="M12.09 2.90995C10.08 0.899954 7.07 0.489954 4.65 1.66995L8.99 6.00995L5.99 9.00995L1.65 4.66995C0.480003 7.09995 0.890003 10.09 2.9 12.1C4.76 13.96 7.48 14.45 9.79 13.58L19.61 23.4L23.32 19.69L13.54 9.89995C14.46 7.55995 13.98 4.79995 12.09 2.90995V2.90995Z" />
    ),
  },
  'checkbox-intermediate': {
    path: (
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H7V11H17V13Z" />
    ),
  },
  'checkbox-selected': {
    path: (
      <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
    ),
  },
  checkbox: {
    path: (
      <path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" />
    ),
  },
  'chevron-down': {
    path: (
      <path d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z" />
    ),
  },
  'chevron-left': {
    path: <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" />,
  },
  'chevron-right': {
    path: (
      <path d="M8.59009 16.59L13.1701 12L8.59009 7.41L10.0001 6L16.0001 12L10.0001 18L8.59009 16.59Z" />
    ),
  },
  'chevron-up': {
    path: <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" />,
  },
  close: {
    path: (
      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
    ),
  },
  'cloud-security': {
    path: (
      <path
        d="M12.6145028,14.0226513 C14.4512635,11.1657925 17.663645,9.61948092 20.9386099,10.0804984 C24.1118521,10.5271964 26.7637022,12.7768068 27.8990856,15.8871618 L27.8990856,15.8871618 L27.9769993,16.1110866 L28.1894205,16.158733 C31.0248198,16.8379094 33.0369972,19.5791148 32.9147143,22.6950183 L32.9147143,22.6950183 L32.9015205,22.9293873 C32.6436475,26.4453881 29.5491041,29.1831895 26.2456653,28.9034622 L26.2456653,28.9034622 L13.9163886,28.902049 C10.2953863,28.8279708 7.31484179,25.8577095 7.02317806,22.033654 C6.73865539,18.3032263 9.10245871,14.9393551 12.5264906,14.1379405 L12.5264906,14.1379405 L12.5449993,14.1330866 Z M20.4133426,11.950859 C17.8390439,11.6956623 15.3360376,13.0467082 13.9902679,15.4601716 L13.9902679,15.4601716 L13.7635162,15.8668212 L13.3037913,15.9405322 C10.638002,16.3679569 8.71432019,18.9599436 8.93761776,21.8876382 C9.16036661,24.8081383 11.4395387,27.0218391 14.1395803,26.9828537 L14.1395803,26.9828537 L26.3257509,26.9868045 C28.6297017,27.1795612 30.8058494,25.2542819 30.9866637,22.7889465 C31.1701567,20.2870885 29.4381915,18.1228352 27.1553404,17.9318437 L27.1553404,17.9318437 L26.4802809,17.8753658 L26.3072301,17.2204242 C25.5649923,14.4112936 23.3436146,12.3579817 20.6709699,11.9817529 L20.6709699,11.9817529 Z M19.9600473,15.9600866 L23.9599993,17.4352643 L23.9599993,19.4023252 C23.9595312,20.621648 23.5742032,21.8105823 22.8579099,22.8063272 C22.1417127,23.8016119 21.129124,24.5539525 19.9599993,24.9600866 C18.7908985,24.5539997 17.7783818,23.8016119 17.0620886,22.8063272 C16.3457953,21.8105232 15.9604685,20.621648 15.9599993,19.4023252 L15.9599993,19.4023252 L15.9599993,17.4352643 L19.9600473,15.9600866 Z"
        transform="translate(-7 -10)"
      />
    ),
    viewBox: '0 0 26 19',
  },
  company: {
    path: (
      <path d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z" />
    ),
  },
  'dashboard-alt': {
    path: (
      <path d="M20.94,7.54,19.51,9.27A7.78,7.78,0,0,1,19.73,14H16.57a5,5,0,0,1-9.14,0H4.27A8,8,0,0,1,16.63,5.49l-6,5a2,2,0,1,0,2.88,2.85l7.23-8.74L19.37,3.19l-1.17,1a10,10,0,1,0,2.26,13.15l0,0v-.05a9.93,9.93,0,0,0,.44-9.71Z" />
    ),
  },
  dashboard: {
    path: (
      <path d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z" />
    ),
  },
  delete: {
    path: <path d="M6 21H18V7H6V21ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" />,
  },
  output: {
    path: (
      <React.Fragment>
        <path d="M10.9,19H5V5h5.9V3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2h5.9Z" />
        <path d="M18.3 13.69L16.89 15.1 18.17 16.39 14.85 16.39 11.83 13.37 8 13.37 8 15.37 11 15.37 14.02 18.39 18.17 18.39 16.89 19.59 18.3 21 22 17.39 18.3 13.69zM18.3 10.31L16.89 8.9 18.17 7.61 14.85 7.61 11.83 10.63 8 10.63 8 8.63 11 8.63 14.02 5.61 18.17 5.61 16.89 4.41 18.3 3 22 6.61 18.3 10.31z" />
      </React.Fragment>
    ),
  },
  docs: {
    path: (
      <path d="M21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5ZM21 18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5Z" />
    ),
  },
  download: {
    path: <path d="M16 13H13V3H11V13H8L12 17L16 13ZM4 19V21H20V19H4Z" />,
  },
  edit: {
    path: (
      <path d="M3 17.2501V21.0001H6.75L17.81 9.94006L14.06 6.19006L3 17.2501ZM20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006V7.04006Z" />
    ),
  },
  filter: {
    path: <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" />,
  },
  'arrow-forward': {
    path: <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" />,
  },
  'infra-analytics': {
    path: (
      <React.Fragment>
        <path d="M20 2a2 2 0 00-2 2 2 2 0 00.26 1L16.57 7.09A2.05 2.05 0 0016 7a2 2 0 00-1.36.54L11.59 6.1s0-.06 0-.1a2 2 0 00-4 0 1.87 1.87 0 00.2.85L4.7 10.23A2 2 0 106 12.1a1.87 1.87 0 00-.2-.85L8.9 7.87A2 2 0 0011 7.46L14 8.9S14 9 14 9a2 2 0 104 0 2 2 0 00-.26-1l1.69-2.12A2.05 2.05 0 0020 6a2 2 0 000-4zM6.77 18.02L6.77 20.61 9.01 21.9 11.25 20.61 11.25 18.02 9.01 16.73 6.77 18.02zM12.75 18.02L12.75 20.61 14.99 21.9 17.23 20.61 17.23 18.02 14.99 16.73 12.75 18.02z" />
        <path d="M14.24 12.89L12 11.6 9.76 12.89 9.76 15.48 12 16.77 14.24 15.48 14.24 12.89z" />
      </React.Fragment>
    ),
  },
  'infra-source': {
    path: (
      <path d="M15.89 8.7L18.17 11 13 11 13 13 18.17 13 15.89 15.3 17.3 16.71 22 12 17.3 7.29 15.89 8.7zM20 2H2V4H20V7h2V4A2 2 0 0020 2zM20 20V20H2v2H20A2 2 0 0022 20V17H20zM2.05 12.79L2.05 15.13 4.07 16.3 6.09 15.13 6.09 12.79 4.07 11.63 2.05 12.79zM7.45 15.13L9.48 16.3 11.5 15.13 11.5 12.79 9.48 11.63 7.45 12.79 7.45 15.13zM4.75 8.15L4.75 10.49 6.77 11.66 8.8 10.49 8.8 8.15 6.77 6.99 4.75 8.15z" />
    ),
  },
  insight: {
    path: (
      <path d="M11 6C12.38 6 13.63 6.56 14.54 7.46L12 10H18V4L15.95 6.05C14.68 4.78 12.93 4 11 4C7.47 4 4.57 6.61 4.08 10H6.1C6.56 7.72 8.58 6 11 6ZM16.64 15.14C17.3 14.24 17.76 13.17 17.92 12H15.9C15.44 14.28 13.42 16 11 16C9.62 16 8.37 15.44 7.46 14.54L10 12H4V18L6.05 15.95C7.32 17.22 9.07 18 11 18C12.55 18 13.98 17.49 15.14 16.64L20 21.49L21.49 20L16.64 15.14Z" />
    ),
  },
  list: {
    path: (
      <path d="M11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM3 3V21H21V3H3ZM19 19H5V5H19V19Z" />
    ),
  },
  'log-analysis': {
    path: (
      <path
        d="M25,29.9487703 L25,31.9487703 L11,31.9487703 L11,29.9487703 L25,29.9487703 Z M30,24.9487703 L30,26.9487703 L11,26.9487703 L11,24.9487703 L30,24.9487703 Z M30,19.9487703 L30,21.9487703 L11,21.9487703 L11,19.9487703 L30,19.9487703 Z M12.644972,7 L17.7924998,11.8658652 L12.8536656,16.5325856 L11.4800661,15.0788923 L14.8810269,11.8647703 L11.2710817,8.45341853 L12.644972,7 Z M23.4847097,14.3571803 L23.4847097,16.3571803 L18.6954529,16.3571803 L18.6954529,14.3571803 L23.4847097,14.3571803 Z"
        transform="translate(-11 -7)"
      />
    ),
    viewBox: '0 0 19 25',
  },
  'log-analytics': {
    path: (
      <React.Fragment>
        <path d="M7.2 13H16.7V15H7.2zM7.2 16.5H16.7V18.5H7.2zM7.2 20H12.5V22H7.2z" />
        <path d="M20,2a2,2,0,0,0-2,2,2,2,0,0,0,.26,1L16.57,7.09A2.05,2.05,0,0,0,16,7a2,2,0,0,0-1.36.54L11.59,6.1s0-.06,0-.1a2,2,0,0,0-4,0,1.87,1.87,0,0,0,.2.85L4.7,10.23A2,2,0,1,0,6,12.1a1.87,1.87,0,0,0-.2-.85L8.9,7.87A2,2,0,0,0,11,7.46L14,8.9S14,9,14,9a2,2,0,1,0,4,0,2,2,0,0,0-.26-1l1.69-2.12A2.05,2.05,0,0,0,20,6a2,2,0,0,0,0-4Z" />
      </React.Fragment>
    ),
  },
  'log-source': {
    path: (
      <path d="M20 7h2V4a2 2 0 00-2-2H2V4H20zM20 20V20H2v2H20A2 2 0 0022 20V17H20zM17.3 16.7L22 12 17.3 7.3 15.89 8.71 18.17 11 13 11 13 13 18.17 13 15.89 15.29 17.3 16.7zM2 7.5H11.5V9.5H2zM2 11H11.5V13H2zM2 14.5H8V16.5H2z" />
    ),
  },
  more: {
    path: (
      <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" />
    ),
  },
  'network-performance': {
    path: (
      <path d="M15.9 4.99999C15.73 4.99999 15.58 5.08999 15.49 5.22999L15.42 5.37999L10.24 17.03C10.08 17.32 9.98 17.64 9.98 17.99C9.98 19.1 10.88 20 11.99 20C12.95 20 13.76 19.32 13.95 18.41L13.96 18.38L16.4 5.49999C16.4 5.21999 16.18 4.99999 15.9 4.99999V4.99999ZM1 8.99999L3 11C5.88 8.11999 9.79 6.91999 13.53 7.37999L14.72 4.69999C9.89 3.83999 4.74 5.26999 1 8.99999ZM21 11L23 8.99999C21.36 7.35999 19.45 6.17999 17.41 5.42999L16.88 8.24999C18.38 8.86999 19.78 9.77999 21 11ZM17 15L19 13C18.2 12.2 17.3 11.58 16.34 11.11L15.79 14.03C16.21 14.3 16.62 14.62 17 15ZM5 13L7 15C8.13 13.87 9.56 13.21 11.03 13L12.31 10.12C9.68 10.04 7.01 10.99 5 13V13Z" />
    ),
  },
  notification: {
    path: (
      <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V2.5H10.5V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" />
    ),
  },
  organization: {
    path: (
      <React.Fragment>
        {' '}
        <path d="M5.6,13.15H11V15h2V13.15h5.4V15h2V12.8a1.65,1.65,0,0,0-1.65-1.65H13V9H11v2.15H5.25A1.65,1.65,0,0,0,3.6,12.8V15h2Z" />
        <circle cx="12" cy="5" r="3" />
        <circle cx="4.6" cy="19.5" r="2.5" />
        <circle cx="12" cy="19.5" r="2.5" />
        <circle cx="19.4" cy="19.5" r="2.5" />
      </React.Fragment>
    ),
  },
  check: {
    path: (
      <path d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 6.99997L19.5899 5.58997L8.99991 16.17Z" />
    ),
  },
  'play-all': {
    path: <path d="M3 6V18L12 12 3 6zM12 6V18L21 12 12 6z" />,
  },
  play: {
    path: <path d="M8 5V19L19 12L8 5Z" />,
  },
  policy: {
    path: (
      <React.Fragment>
        <path d="M12 2L4 5.64v6A11.05 11.05 0 0012 22a11.05 11.05 0 008-10.41V5.64zm3.65 13.48l-1.42-.57a3.39 3.39 0 01-.82.48L13.2 16.9H10.8l-.21-1.5a3.53 3.53 0 01-.82-.48l-1.42.57L7.16 13.42l1.2-.94a3.86 3.86 0 010-1l-1.2-.94L8.35 8.52l1.42.57a3.79 3.79 0 01.82-.49l.21-1.5h2.4l.21 1.5a3.53 3.53 0 01.82.48l1.42-.57 1.19 2.07h0l-1.2.94a3.86 3.86 0 010 1l1.2.94zM12 22L12 22 12 22 12 22z" />
        <circle cx="12" cy="12" r="1.5" />
      </React.Fragment>
    ),
  },
  preference: {
    path: (
      <path d="M3 17V19H9V17H3ZM3 5V7H13V5H3ZM13 21V19H21V17H13V15H11V21H13ZM7 9V11H3V13H7V15H9V9H7ZM21 13V11H11V13H21ZM15 9H17V7H21V5H17V3H15V9Z" />
    ),
  },
  user: {
    path: (
      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
    ),
  },
  'radio-selected': {
    path: (
      <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" />
    ),
  },
  radio: {
    path: (
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" />
    ),
  },
  remove: {
    path: (
      <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z" />
    ),
  },
  resource: {
    path: (
      <path d="M19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15.89,18.57H8.67a3.58,3.58,0,0,1-.58-7.12,4.54,4.54,0,0,1,8.27,1.09,3,3,0,0,1-.47,6ZM20,6H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z" />
    ),
  },
  rule: {
    path: (
      <path d="M11 3.21H22V6.21H11zM11 10.5H22V13.5H11zM11 17.81H22V20.81H11zM4.91 11.98L3.36 10.43 2 11.79 3.55 13.34 3.55 13.34 4.91 14.69 4.91 14.69 4.91 14.69 6.26 13.34 6.26 13.34 8.94 10.66 7.58 9.31 4.91 11.98zM4.91 4.69L3.36 3.14 2 4.49 3.55 6.04 3.55 6.04 4.91 7.4 4.91 7.4 4.91 7.4 6.26 6.04 6.26 6.04 8.94 3.37 7.58 2.01 4.91 4.69zM6.83 16.61L5.49 17.95 4.16 16.61 2.8 17.97 4.14 19.31 2.8 20.64 4.16 22 5.49 20.66 6.83 22 8.19 20.64 6.85 19.31 8.19 17.97 6.83 16.61z" />
    ),
  },
  search: {
    path: (
      <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14V14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" />
    ),
  },
  'settings-alt': {
    path: (
      <path d="M6 2L4 2 4 7 2 7 2 8.98 8 8.98 8 7 6 7 6 2zM4 11.01H6V22H4zM20 7L20 2 18 2 18 7 16 7 16 8.98 22 8.98 22 7 20 7zM18 11.01H20V22H18zM13 2L11 2 11 13 9 13 9 14.98 15 14.98 15 13 13 13 13 2zM11 17.01H13V22H11z" />
    ),
  },
  settings: {
    path: (
      <path d="M19.4301 12.98C19.4701 12.66 19.5001 12.34 19.5001 12C19.5001 11.66 19.4701 11.34 19.4301 11.02L21.5401 9.37C21.7301 9.22 21.7801 8.95 21.6601 8.73L19.6601 5.27C19.5401 5.05 19.2701 4.97 19.0501 5.05L16.5601 6.05C16.0401 5.65 15.4801 5.32 14.8701 5.07L14.4901 2.42C14.4601 2.18 14.2501 2 14.0001 2H10.0001C9.75008 2 9.54008 2.18 9.51008 2.42L9.13008 5.07C8.52008 5.32 7.96008 5.66 7.44008 6.05L4.95008 5.05C4.72008 4.96 4.46008 5.05 4.34008 5.27L2.34008 8.73C2.21008 8.95 2.27008 9.22 2.46008 9.37L4.57008 11.02C4.53008 11.34 4.50008 11.67 4.50008 12C4.50008 12.33 4.53008 12.66 4.57008 12.98L2.46008 14.63C2.27008 14.78 2.22008 15.05 2.34008 15.27L4.34008 18.73C4.46008 18.95 4.73008 19.03 4.95008 18.95L7.44008 17.95C7.96008 18.35 8.52008 18.68 9.13008 18.93L9.51008 21.58C9.54008 21.82 9.75008 22 10.0001 22H14.0001C14.2501 22 14.4601 21.82 14.4901 21.58L14.8701 18.93C15.4801 18.68 16.0401 18.34 16.5601 17.95L19.0501 18.95C19.2801 19.04 19.5401 18.95 19.6601 18.73L21.6601 15.27C21.7801 15.05 21.7301 14.78 21.5401 14.63L19.4301 12.98V12.98ZM12.0001 15.5C10.0701 15.5 8.50008 13.93 8.50008 12C8.50008 10.07 10.0701 8.5 12.0001 8.5C13.9301 8.5 15.5001 10.07 15.5001 12C15.5001 13.93 13.9301 15.5 12.0001 15.5Z" />
    ),
  },
  star: {
    path: (
      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
    ),
  },
  'sync-disabled': {
    path: (
      <path d="M10.0001 6.35V4.26C9.34011 4.43 8.71011 4.69 8.12011 5.01L9.62011 6.51C9.75011 6.46 9.87011 6.4 10.0001 6.35V6.35ZM20.0001 12C20.0001 9.79 19.0901 7.8 17.6401 6.36L20.0001 4H14.0001V10L16.2401 7.76C17.3201 8.85 18.0001 10.34 18.0001 12C18.0001 12.85 17.8101 13.65 17.4901 14.38L18.9901 15.88C19.6301 14.74 20.0001 13.41 20.0001 12ZM4.27011 4L2.86011 5.41L5.22011 7.77C4.45011 8.99 4.00011 10.44 4.00011 12C4.00011 14.21 4.91011 16.2 6.36011 17.64L4.00011 20H10.0001V14L7.76011 16.24C6.68011 15.15 6.00011 13.66 6.00011 12C6.00011 11 6.25011 10.06 6.68011 9.23L14.7601 17.31C14.5101 17.44 14.2601 17.55 14.0001 17.65V19.74C14.8001 19.53 15.5501 19.2 16.2301 18.78L18.8101 21.36L20.2201 19.95L4.27011 4Z" />
    ),
  },
  sync: {
    path: (
      <React.Fragment>
        <g clipPath="url(#clip0)">
          <path d="M12 4V1L8 5L12 9V6C15.31 6 18 8.69 18 12C18 13.01 17.75 13.97 17.3 14.8L18.76 16.26C19.54 15.03 20 13.57 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 10.99 6.25 10.03 6.7 9.2L5.24 7.74C4.46 8.97 4 10.43 4 12C4 16.42 7.58 20 12 20V23L16 19L12 15V18Z" />
        </g>
        <defs>
          <clipPath id="clip0">
            <path d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </React.Fragment>
    ),
  },
  timer: {
    path: (
      <path d="M11 17C11 17.55 11.45 18 12 18C12.55 18 13 17.55 13 17C13 16.45 12.55 16 12 16C11.45 16 11 16.45 11 17ZM11 3V7H13V5.08C16.39 5.57 19 8.47 19 12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12C5 10.32 5.59 8.78 6.58 7.58L12 13L13.41 11.59L6.61 4.79V4.81C4.42 6.45 3 9.05 3 12C3 16.97 7.02 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3H11ZM18 12C18 11.45 17.55 11 17 11C16.45 11 16 11.45 16 12C16 12.55 16.45 13 17 13C17.55 13 18 12.55 18 12ZM6 12C6 12.55 6.45 13 7 13C7.55 13 8 12.55 8 12C8 11.45 7.55 11 7 11C6.45 11 6 11.45 6 12Z" />
    ),
  },
  group: {
    path: (
      <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" />
    ),
  },
  'warning-alt': {
    path: (
      <path d="M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3ZM12 17.3C11.28 17.3 10.7 16.72 10.7 16C10.7 15.28 11.28 14.7 12 14.7C12.72 14.7 13.3 15.28 13.3 16C13.3 16.72 12.72 17.3 12 17.3ZM13 13H11V7H13V13Z" />
    ),
  },
  warning: {
    path: <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" />,
  },
  upload: {
    path: (
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM14 13V17H10V13H7L12 8L17 13H14Z" />
    ),
  },
};

export default icons;
