import logo from '@assets/logo.png';
import adminLogo from '@assets/admin-logo.png';
import {Link} from 'react-router-dom';

export default function Logo({
  isAdmin = false,
  styles: {className, style} = {},
}) {
  const logoSrc = isAdmin ? adminLogo : logo;
  return (
    <Link className={className} style={style} to={'/'}>
      <img src={logoSrc} alt="Logo image" />
    </Link>
  );
}
