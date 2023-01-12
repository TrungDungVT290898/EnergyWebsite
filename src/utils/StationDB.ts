import WavesIcon from '@mui/icons-material/Waves';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import OpacityIcon from '@mui/icons-material/Opacity';
import WindPowerIcon from '@mui/icons-material/WindPower';
interface ComponentInfo {
  name: string;
  VName: string;
  image: OverridableComponent<SvgIconTypeMap<any, 'svg'>> & {
    muiName: string;
  };
}
export const DB: ComponentInfo[] = [
  {
    name: 'LuongMua',
    VName: 'Lượng mưa',
    image: WavesIcon,
  },
  {
    name: 'MucNuocHaLuu',
    VName: 'Mực nước hạ lưu',
    image: OpacityIcon,
  },
  {
    name: 'LuuLuongPhatDien',
    VName: 'Lưu lượng phát điện',
    image: WavesIcon,
  },
  {
    name: 'LuuLuongXaTran',
    VName: 'Lưu lượng xả tràn',
    image: WavesIcon,
  },
  {
    name: 'LuuLuongXaToiThieu',
    VName: 'Lưu lượng xả tối thiểu',
    image: WavesIcon,
  },
  {
    name: 'DongDienI-ARGH1',
    VName: 'Dòng điện I-ARGH1',
    image: WindPowerIcon,
  },
  {
    name: 'DienApV-ARGH1',
    VName: 'Điện áp I-ARGH1',
    image: WindPowerIcon,
  },
  {
    name: 'CongSuatPhatH1',
    VName: 'Công suất phát H1',
    image: WindPowerIcon,
  },
  {
    name: 'MucNuocThuongLuu',
    VName: 'Mực nước thượng lưu',
    image: WindPowerIcon,
  },
];
