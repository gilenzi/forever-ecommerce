import logo from '@assets/logo.png';
import adminLogo from '@assets/admin-logo.png';

export default function Logo({
  isAdmin = false,
  styles: {className, style} = {},
}) {
  const logoSrc = isAdmin ? adminLogo : logo;
  return (
    <img src={logoSrc} alt="Logo image" className={className} style={style} />
  );
}
