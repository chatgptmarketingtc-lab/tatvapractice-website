import { LOGO_SVG } from '@/lib/data';

export default function Logo({ height = 28 }) {
  return <div style={{ height }} dangerouslySetInnerHTML={{ __html: LOGO_SVG.replace('viewBox', `style="height:${height}px;width:auto;display:block" viewBox`) }} />;
}
