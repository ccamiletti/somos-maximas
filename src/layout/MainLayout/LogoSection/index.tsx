import Link from 'Link';
// material-ui
import {Link as MuiLink} from '@mui/material';

// project imports
import {DASHBOARD_PATH} from 'config';
import LudicrousLogo from "ui-component/LudicrousLogo";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <MuiLink component={Link} href={DASHBOARD_PATH}>
        <LudicrousLogo/>
    </MuiLink>
);

export default LogoSection;
