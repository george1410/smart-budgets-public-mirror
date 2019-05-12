import React from 'react';
import styled from 'styled-components';
import media from '../../../util/mediaQueries';

const Image = styled.div`
  width: 33.3%;
  display: flex;
  justify-content: flex-end;
  ${media.phone`
    width: 25%;
  `}

  & > svg {
    max-width: 12rem;
    width: 100%;
    height: 80%;
  }
`;

export const CashImage = () => (
  <Image>
    <svg viewBox="0 0 144 61" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Artboard" transform="translate(-520.000000, -627.000000)">
          <g id="budget-3" transform="translate(269.000000, 565.000000)">
            <g id="Cash" transform="translate(246.000000, 26.000000)">
              <path d="M14.4920558,17.0359564 C-2.68317649,27.7991969 -0.675811826,37.0910954 1.226429,55.3157854 C3.17121995,73.4980807 5.83245104,77.2662124 11.3339317,98.8325942 C16.8354124,120.398976 21.6548974,128.259433 32.7635795,136.239593 C43.8722616,144.219753 55.5003632,149.327055 74.5628187,143.471613 C93.6803389,137.658565 104.848495,130.795628 116.612353,124.019974 C128.37621,117.244319 148.650093,107.865138 153.906285,96.0894143 C159.162476,84.313691 154.073982,71.2785987 143.644196,57.6848953 C133.25696,44.0363283 120.519295,30.0105468 99.0917135,9.55455658 C77.6641319,-10.9014336 31.6622822,6.23530887 14.4920558,17.0359564 Z" id="Path" fillRule="nonzero" />
              <g id="Bill" transform="translate(5.000000, 48.666667)">
                <rect id="Rectangle" fill="#000000" x="0" y="0" width="139" height="47.6734694" />
                <rect id="Rectangle" fill="#FFFFFF" x="0.748653501" y="0.741038384" width="137.502693" height="46.1913926" />
                <g id="top" transform="translate(69.006284, 38.221265) rotate(180.000000) translate(-69.006284, -38.221265) translate(2.506284, 32.721265)" fill="#D8D8D8">
                  <polygon id="Rectangle" points="-5.68434189e-14 4.26325641e-14 132.012567 4.26325641e-14 132.012567 10.251031 94.8294434 10.251031 94.8294434 4.19921751 -5.68434189e-14 4.19921751" />
                </g>
              </g>
              <g id="Bill" transform="translate(78.141423, 64.703511) rotate(3.000000) translate(-78.141423, -64.703511) translate(8.141423, 40.203511)">
                <rect id="Rectangle" fill="#000000" x="0" y="0" width="139.25" height="48.0394163" />
                <rect id="Rectangle" fill="#FFFFFF" x="0.75" y="0.746726678" width="137.75" height="46.5459629" />
                <g id="top" transform="translate(3.500000, 3.982542)" fill="#D8D8D8">
                  <polygon id="Rectangle" points="-5.68434189e-14 4.26325641e-14 132.25 4.26325641e-14 132.25 10.329719 95 10.329719 95 4.23145117 -5.68434189e-14 4.23145117" />
                </g>
                <g id="top" transform="translate(69.250000, 38.556874) rotate(180.000000) translate(-69.250000, -38.556874) translate(2.750000, 33.056874)" fill="#D8D8D8">
                  <polygon id="Rectangle" points="-5.68434189e-14 4.26325641e-14 132.25 4.26325641e-14 132.25 10.329719 95 10.329719 95 4.23145117 -5.68434189e-14 4.23145117" />
                </g>
                <ellipse id="Oval" fill="#DCDCDC" cx="69.75" cy="24.1441626" rx="14.5" ry="14.4367158" />
                <ellipse id="Oval" fill="#B1B1B1" cx="69.75" cy="24.1441626" rx="10" ry="9.9563557" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </Image>
);

export const BillsImage = () => (
  <Image>
    <svg viewBox="0 0 156 90" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Artboard" transform="translate(-515.000000, -1441.000000)">
          <g id="budget-2" transform="translate(269.000000, 1387.000000)">
            <g id="bills" transform="translate(246.000000, 26.000000)">
              <path d="M11.4453496,100.158301 C26.9253111,130.913337 43.3659035,155.747176 76.1014342,143.078936 C108.836965,130.410696 134.431622,117.232885 147.910958,100.158301 C161.390294,83.0837168 137.451247,15.9723171 108.016778,11.2905762 C78.5823093,6.60883536 29.879212,-15.1221222 13.2332497,18.1746656 C-3.4127127,51.4714534 -4.03461195,69.4032648 11.4453496,100.158301 Z" id="Path-2" fillOpacity="0" fill="#F2F2F2" />
              <g id="empty-env" transform="translate(78.027360, 73.332904) rotate(8.000000) translate(-78.027360, -73.332904) translate(4.291910, 38.803804)">
                <g id="frame">
                  <rect id="Rectangle" fill="#000000" x="0" y="0" width="147.470899" height="69.0582011" />
                  <rect id="Rectangle" fill="#FFFFFF" x="0.825396825" y="0.825396825" width="145.820106" height="67.4074074" />
                </g>
              </g>
              <g id="empty-env" transform="translate(78.027360, 73.332904) rotate(4.000000) translate(-78.027360, -73.332904) translate(4.291910, 38.803804)">
                <g id="frame">
                  <rect id="Rectangle" fill="#000000" x="0" y="0" width="147.470899" height="69.0582011" />
                  <rect id="Rectangle" fill="#FFFFFF" x="0.825396825" y="0.825396825" width="145.820106" height="67.4074074" />
                </g>
              </g>
              <g id="envelope" transform="translate(4.291910, 38.803804)">
                <g id="frame">
                  <rect id="Rectangle" fill="#000000" x="0" y="0" width="147.470899" height="69.0582011" />
                  <rect id="Rectangle" fill="#FFFFFF" x="0.825396825" y="0.825396825" width="145.820106" height="67.4074074" />
                </g>
                <rect id="Rectangle" fill="#D9D9D9" x="7.42857143" y="7.42857143" width="59.7037037" height="18.1587302" rx="9.07936508" />
                <rect id="Rectangle" fill="#6D6D6D" x="100.698413" y="12.9312169" width="39.8941799" height="5.77777778" />
                <rect id="Rectangle-Copy" fill="#6D6D6D" x="106.201058" y="20.9100529" width="34.3915344" height="5.77777778" />
                <rect id="Rectangle-Copy-2" fill="#6D6D6D" x="102.624339" y="28.8888889" width="37.968254" height="5.77777778" />
                <rect id="Rectangle-Copy-3" fill="#6D6D6D" x="116.931217" y="36.8677249" width="23.6613757" height="5.77777778" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </Image>
);

export const EatingOutImage = () => (
  <Image>
    <svg viewBox="0 0 903 777" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="-" transform="translate(-3037.000000, -2669.000000)">
          <g id="storefront-monochrome" transform="translate(3037.000000, 2577.000000)">
            <path d="M197.65,11.3 C92.05,42 -3.55,142.11 3.71,240 C10.71,337.87 120.89,433.48 190.84,549.75 C260.56,666.25 290.31,803.42 371.38,857.92 C452.22,912.41 584.16,884 690.67,827 C797,770 877.8,684.64 928,587 C978,489.12 997.49,379 965.93,291.09 C934.57,203.2 852.36,137.8 772,102.6 C691.38,67.6 612.58,63.31 515.61,41.51 C418.39,19.71 303,-19.35 197.65,11.3 Z" id="Path" fillOpacity="0" fill="#F8F8F8" fillRule="nonzero" />
            <path d="M0,650.12 C0,595.12 23,587.12 23,553.12 C23,415.12 69,392.12 99,392.12 C156,392.12 149.6,452.01 163,472.12 C193,517.12 206,550.12 206,581.12 C206,707.12 154,782.12 110,782.12 C62,782.12 0,714.19 0,650.12 Z" id="Path" fill="#000000" fillRule="nonzero" />
            <path d="M108,560.12 L108,865.12" id="Path" stroke="#DFDFDF" strokeWidth="6" strokeLinecap="round" />
            <path d="M108,639.12 L155,592.12" id="Path" stroke="#DFDFDF" strokeWidth="6" strokeLinecap="round" />
            <path d="M108,716.12 L66.5,674.62" id="Path" stroke="#DFDFDF" strokeWidth="6" strokeLinecap="round" />
            <polyline id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" fillRule="nonzero" strokeLinecap="round" strokeLinejoin="round" points="757 566.12 757 843.12 185 843.12 185 117.12 757 117.12 757 540.12" />
            <rect id="Rectangle" fill="#DFDFDF" fillRule="nonzero" x="168.5" y="808.12" width="605" height="37" />
            <rect id="Rectangle" fill="#000000" fillRule="nonzero" x="249" y="611.12" width="153" height="234" />
            <rect id="Rectangle" fill="#DFDFDF" fillRule="nonzero" x="439" y="609.12" width="282" height="133" />
            <rect id="Rectangle" fill="#DFDFDF" fillRule="nonzero" x="144" y="419.12" width="649" height="15" />
            <rect id="Rectangle" fill="#DFDFDF" fillRule="nonzero" x="144" y="293.12" width="649" height="15" />
            <rect id="Rectangle" fill="#DFDFDF" fillRule="nonzero" x="144" y="92.12" width="649" height="35" />
            <rect id="Rectangle" fill="#DFDFDF" fillRule="nonzero" x="218" y="158.12" width="107" height="135" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="223" y="162.42" width="97" height="130.69" />
            <rect id="Rectangle" fill="#DFDFDF" fillRule="nonzero" x="414" y="158.12" width="107" height="135" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="419" y="162.42" width="97" height="130.69" />
            <rect id="Rectangle" fill="#DFDFDF" fillRule="nonzero" x="610" y="158.12" width="107" height="135" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="615" y="162.42" width="97" height="130.69" />
            <polygon id="Path" fill="#DFDFDF" fillRule="nonzero" points="811 540.12 757 434.12 185 434.12 131 540.12" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="185" y="434.12" width="18" height="106" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="227.62" y="434.12" width="18" height="106" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="270.23" y="434.12" width="18" height="106" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="312.85" y="434.12" width="18" height="106" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="355.46" y="434.12" width="18" height="106" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="398.08" y="434.12" width="18" height="106" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="440.69" y="434.12" width="18" height="106" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="483.31" y="434.12" width="18" height="106" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="525.92" y="434.12" width="18" height="106" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="568.54" y="434.12" width="18" height="106" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="611.15" y="434.12" width="18" height="106" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="653.77" y="434.12" width="18" height="106" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="696.38" y="434.12" width="18" height="106" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="739" y="434.12" width="18" height="106" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="448" y="617.12" width="264" height="117" />
            <polygon id="Path" fill="#F8F8F8" fillRule="nonzero" points="320 183.51 223 280.51 223 293.12 227 293.12 320 200.12" />
            <polygon id="Path" fill="#F8F8F8" fillRule="nonzero" points="295 162.12 223 234.12 223 270.72 320 173.72 320 162.12" />
            <polygon id="Path" fill="#F8F8F8" fillRule="nonzero" points="516 183.51 419 280.51 419 293.12 423 293.12 516 200.12" />
            <polygon id="Path" fill="#F8F8F8" fillRule="nonzero" points="491 162.12 419 234.12 419 270.72 516 173.72 516 162.12" />
            <polygon id="Path" fill="#F8F8F8" fillRule="nonzero" points="712 183.51 615 280.51 615 293.12 619 293.12 712 200.12" />
            <polygon id="Path" fill="#F8F8F8" fillRule="nonzero" points="687 162.12 615 234.12 615 270.72 712 173.72 712 162.12" />
            <rect id="Rectangle" fill="#FFFFFF" fillRule="nonzero" x="257" y="619.12" width="137" height="226" />
            <rect id="Rectangle" fill="#DFDFDF" fillRule="nonzero" x="256.97" y="720.12" width="141.03" height="6" />
            <rect id="Rectangle" fill="#DFDFDF" fillRule="nonzero" x="758.24" y="360.12" width="59.76" height="12" />
            <circle id="Oval" fill="#969696" fillRule="nonzero" cx="860.5" cy="366.12" r="42.5" />
            <circle id="Oval" fill="#000000" fillRule="nonzero" cx="860.5" cy="366.12" r="29.76" />
            <polygon id="Path" fill="#F8F8F8" fillRule="nonzero" points="570.13 617.12 453.13 734.12 531 734.12 648 617.12" />
            <polygon id="Path" fill="#F8F8F8" fillRule="nonzero" points="563 734.12 680 617.12 665.13 617.12 548.13 734.12" />
            <polygon id="Path" fill="#F8F8F8" fillRule="nonzero" points="712 617.12 696.13 617.12 579.13 734.12 614 734.12 712 636.12" />
            <rect id="Rectangle" fill="#626262" fillRule="nonzero" x="131" y="540.12" width="680" height="26" />
          </g>
        </g>
      </g>
    </svg>
  </Image>
);

export const GroceriesImage = () => (
  <Image>
    <svg viewBox="0 0 760 662" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="-" transform="translate(-203.000000, -1225.000000)">
          <g id="breakfast-monochome" transform="translate(203.000000, 1224.000000)">
            <g id="Layer_1-2">
              {/* background blob */}
              <path d="M758.79,286.26 C754.79,205.52 703.08,128.5 634.08,73.9 C565.08,19.3 478.63,-12.52 413.54,6.54 C348.45,25.6 305.14,95.92 251,150.4 C196.86,204.88 132.08,243.77 122.4,291.29 C119.58,305.19 121.46,319.82 126.88,334.29 L186.79,328.11 C204.235798,326.367852 219.816038,339.03573 221.67,356.47 L221.67,356.47 C223.054689,370.141982 215.533744,383.165665 203,388.8 C203.886275,390.539328 204.442342,392.42792 204.64,394.37 L205.48,402.5 C205.569916,403.467916 205.569916,404.442084 205.48,405.41 C213.65346,404.699326 220.891961,410.661752 221.76,418.82 L223.04,431.18 C229.91,434.56 236.93,437.58 244.11,440.31 L244.11,366.12 L244.17,366.12 C244.134682,365.969056 244.114581,365.814953 244.11,365.66 C244.11,357.8 280.05,351.42 324.39,351.42 C336.65,351.42 348.26,351.91 358.65,352.78 L358.65,352.78 L358.65,165.45 L397.76,108.1 L397.07,108.1 L397.07,73.35 C397.069996,70.2037163 398.321219,67.1865875 400.547853,64.9637056 C402.774486,62.7408237 405.793721,61.4946898 408.94,61.5 L549.06,61.5 C552.203629,61.4973438 555.219266,62.7449693 557.442149,64.9678515 C559.665031,67.1907336 560.912656,70.2063711 560.91,73.35 L560.91,108.1 L522.67,165.45 L522.67,494.08 C528.056667,494.673333 533.426667,495.18 538.78,495.6 L538.78,476.42 C538.859779,452.096725 556.079663,431.2036 579.94,426.48 L579.94,415.38 L709.64,415.38 L709.64,426.48 C711.777713,426.897544 713.885608,427.455418 715.95,428.15 C745.3,388.85 761.41,336.83 758.79,286.26 Z" id="Path" fill="transparent" fillRule="nonzero" />
              <path d="M322.26,324.91 C321.43,324.91 320.61,324.91 319.79,324.99 L307,324.91 C306.2,324.91 305.4,324.91 304.61,324.98 L292.67,324.91 C291.94,324.91 291.21,324.91 290.49,324.97 L281.03,324.91 C280.25,324.91 279.47,324.91 278.7,324.98 L267.59,324.91 C266.843333,324.91 266.093333,324.93 265.34,324.97 L255.05,324.91 C254.37,324.91 253.69,324.91 253.05,324.91 L245.36,324.91 C244.56,324.91 243.76,324.91 242.97,324.98 L231.06,324.91 C230.3,324.91 229.55,324.91 228.8,324.97 L218.48,324.91 C217.72,324.91 216.97,324.91 216.22,324.97 L205.9,324.91 C205.31,324.91 204.72,324.91 204.14,324.91 L198.47,324.91 C197.72,324.91 196.99,324.91 196.25,324.97 L186.45,324.91 C185.743333,324.91 185.033333,324.93 184.32,324.97 L175.44,324.91 C174.73,324.91 174.03,324.91 173.33,324.91 L164.7,324.91 C163.79,324.91 162.89,324.91 162,325.01 L146.46,324.91 C145.85,324.91 145.24,324.91 144.63,324.91 L138.73,324.91 C138.05,324.91 137.37,324.91 136.73,324.91 L129.04,324.91 C128.36,324.91 127.68,324.91 127.04,324.91 L119.35,324.91 C108.383308,324.858944 97.9590284,329.675503 90.89,338.06 L186.89,328.16 C204.335798,326.417852 219.916038,339.08573 221.77,356.52 L221.77,356.52 C223.115942,370.198987 215.554121,383.203547 203,388.8 C203.886275,390.539328 204.442342,392.42792 204.64,394.37 L205.48,402.5 C205.569916,403.467916 205.569916,404.442084 205.48,405.41 C213.65346,404.699326 220.891961,410.661752 221.76,418.82 L238.4,580.12 C239.227244,588.364172 233.239571,595.728117 225,596.6 L90,610.53 C95.9782927,617.59197 104.74747,621.684252 114,621.73 L244.16,622.52 L244.16,366.12 L244.22,366.12 C244.184682,365.969056 244.164581,365.814953 244.16,365.66 C244.16,357.8 280.1,351.42 324.44,351.42 C336.7,351.42 348.31,351.91 358.7,352.78 L358.7,325.13 L322.26,324.91 Z" id="Path" fill="#D3D3D3" fillRule="nonzero" />
              <polyline id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" points="482.5 108.1 560.91 108.1 522.67 165.45 358.67 165.45 397.78 108.1 418.87 108.1" />
              <path d="M560.910004,108.1 L560.91,73.35 C560.912656,70.2063711 559.665031,67.1907336 557.442149,64.9678515 C555.219266,62.7449693 552.203629,61.4973438 549.06,61.5 L408.94,61.5 C402.395426,61.5 397.09,66.8054257 397.09,73.35 L397.09,108.1" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
              <polyline id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" points="358.67 352.78 358.67 165.45 522.67 165.45 522.67 644.23 404.66 629.98" />
              <ellipse id="Oval" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(448.367098, 111.281844) rotate(-15.060000) translate(-448.367098, -111.281844) " cx="448.367098" cy="111.281844" rx="35.49" ry="17.14" />
              <polygon id="Path" fill="#000000" fillRule="nonzero" points="560.91 108.1 522.67 165.45 591.33 165.95" />
              <path d="M497.31,297.34 L382.7,296.22 C378.171011,296.181571 374.519837,292.499152 374.52,287.97 L374.52,194.34 C374.522564,192.137114 375.40496,190.026515 376.971063,188.477311 C378.537167,186.928108 380.657216,186.068663 382.86,186.09 L497.47,187.2 C501.998315,187.24928 505.644792,190.93142 505.65,195.46 L505.65,289.08 C505.647414,291.283789 504.765336,293.395396 503.199529,294.946183 C501.633722,296.49697 499.513711,297.358655 497.31,297.34 Z" id="Path" fill="#000000" fillRule="nonzero" />
              <path d="M489.64,128.08 L489.64,128.08 L482.64,102.08 L482.64,102.08 C485.1,111.22 471.75,122.76 452.82,127.85 C433.89,132.94 416.56,129.66 414.1,120.52 L421.1,146.52 C423.56,155.66 440.9,158.95 459.82,153.85 C478.74,148.75 492.09,137.22 489.64,128.08 Z" id="Path" fill="#000000" fillRule="nonzero" />
              <g id="jar" transform="translate(538.780000, 415.380000)">
                <path d="M170.86,11.1 L170.86,-1.27897692e-13 L41.16,-1.27897692e-13 L41.16,11.1 C17.299663,15.8236003 0.0797790887,36.7167248 2.7000624e-13,61.04 L2.7000624e-13,177.13 C0.0550216499,205.218471 22.8115285,227.974978 50.9,228.03 L161.13,228.03 C189.214566,227.969479 211.964997,205.214578 212.02,177.13 L212.02,61.04 C211.944116,36.7153194 194.72246,15.8200453 170.86,11.1 Z" stroke="#4D4D4D" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
                <circle id="Oval" fill="#4D4D4D" fillRule="nonzero" transform="translate(106.010000, 119.090000) rotate(89.000000) translate(-106.010000, -119.090000) " cx="106.01" cy="119.09" r="43.18" />
                <path d="M2.13162821e-13,177.13 L212.02,177.13" id="Path" stroke="#4D4D4D" strokeWidth="8.52" />
                <path d="M0,58.69 L212.02,58.69" id="Path" stroke="#4D4D4D" strokeWidth="8.52" />
              </g>
              <ellipse id="Oval" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" cx="324.41" cy="365.66" rx="80.28" ry="14.24" />
              <circle id="Oval" fill="#000000" fillRule="nonzero" cx="635.95" cy="333.07" r="15.6" />
              <circle id="Oval" fill="#000000" fillRule="nonzero" cx="671.62" cy="306.38" r="11.09" />
              <circle id="Oval" fill="#000000" fillRule="nonzero" cx="677.61" cy="339.05" r="5.99" />
              <circle id="Oval" fill="#000000" fillRule="nonzero" cx="256.93" cy="209.61" r="12.8" />
              <circle id="Oval" fill="#000000" fillRule="nonzero" cx="277.27" cy="244.8" r="7.55" />
              <path d="M237.1,418.06 C236.006528,407.407522 229.613766,398.025204 220.1,393.11 C229.399847,385.214363 234.216849,373.246657 232.98,361.11 L231.9,350.66 C229.731356,330.365323 211.588615,315.626021 191.28,317.66 L33.5,333.94 C13.25,336 -2.29,356.09 0.28,378.19 C2.86,400.46 10.35,408.02 20.68,413.68 C12.371058,420.432555 8.027893,430.920076 9.13,441.57 L25.6,601.24 C27.4016507,618.691548 43.0081927,631.379138 60.46,629.58 L225.23,612.58 C232.348746,611.856685 239.011688,608.740261 244.13,603.74 L244.13,486.18 L237.1,418.06 Z" id="Shape" fill="#D3D3D3" fillRule="nonzero" />
              <path d="M225,596.6 L57.4,613.89 C49.1575272,614.711581 41.7970808,608.726752 40.92,600.49 L24.29,439.19 C23.5499291,431.552298 28.6708322,424.579428 36.18,423 C35.8904869,422.044348 35.692923,421.063225 35.59,420.07 L34.75,411.94 C34.5520612,409.99749 34.7113527,408.035154 35.22,406.15 C21.823426,403.196411 11.8137816,392.011056 10.36,378.37 L10.36,378.37 C8.61218895,360.922503 21.2829115,345.338765 38.72,343.49 L186.79,328.21 C204.235798,326.467852 219.816038,339.13573 221.67,356.57 L221.67,356.57 C223.00965,370.207035 215.496106,383.177658 203,388.8 C203.886275,390.539328 204.442342,392.42792 204.64,394.37 L205.48,402.5 C205.569916,403.467916 205.569916,404.442084 205.48,405.41 C213.65346,404.699326 220.891961,410.661752 221.76,418.82 L238.4,580.12 C239.227244,588.364172 233.239571,595.728117 225,596.6 Z" id="Path" fill="#FFFFFF" fillRule="nonzero" />
              <polyline id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" points="404.69 366.12 404.69 661.49 244.13 661.49 244.13 366.12" />
              <path d="M375.19,433.24 C365.85,433.24 361.1,418.83 343.58,418.83 C313.39,418.83 319.35,433.24 277.23,433.24 L273.63,433.24 C270.124758,433.237347 266.762173,434.627939 264.282654,437.105582 C261.803135,439.583225 260.409999,442.944757 260.41,446.45 L260.41,630.65 C260.41552,637.947299 266.332699,643.860002 273.63,643.86 L375.19,643.86 C382.487301,643.860002 388.40448,637.947299 388.41,630.65 L388.41,446.45 C388.410001,442.944757 387.016865,439.583225 384.537346,437.105582 C382.057827,434.627939 378.695242,433.237347 375.19,433.24 L375.19,433.24 Z" id="Path" fill="#D3D3D3" fillRule="nonzero" />
              <path d="M538.78,592.51 L538.78,476.42 C538.859779,452.096725 556.079663,431.2036 579.94,426.48 L579.94,415.38 L590.56,415.38 L591.33,166 L522.67,165.5 L522.67,645.5 L553.25,628 C543.969707,618.518419 538.774937,605.777411 538.78,592.51 Z" id="Path" fill="#000000" fillRule="nonzero" />
              <rect id="Rectangle" fill="#4D4D4D" fillRule="nonzero" x="556.49" y="382.43" width="176.61" height="38.27" rx="14.61" />
            </g>
            <g id="Shadows" transform="translate(358.000000, 92.000000)" fillRule="nonzero">
              <polygon id="Path" points="58.27 19.29 55.82 26.38 58.27 32.32 65.69 36.61 71.81 37.9 86.5 37.9 98.89 34.62 112.06 28.59 120.14 22.18 124.5 16.1 124.64 10.07 122.17 5.95 117.04 2.69 109.37 0.73 101.06 0.38 94.01 0.38 82.08 3.88 70.48 8.93 64.25 13.24" />
              <path d="M0.67,247.48 C11.13,247.48 66.84,252.21 66.84,274.12 C66.84,296.03 98.5,544.24 98.5,544.24 L46.66,540.42 L46.66,274.12 L43.66,269.31 L29.83,264.94 L12.71,262 L0.71,260.75 L0.67,247.48 Z" id="Path" fill="#929292" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </Image>
);

export const HealthImage = () => (
  <Image>
    <svg viewBox="0 0 663 637" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="-" transform="translate(-445.000000, -2335.000000)">
          <g id="doctor-monochrome" transform="translate(445.000000, 2335.000000)">
            <g id="vector">
              <path d="M390.55,489 C381.1,489 377.11,488 374.71,486.78 L359,529.08 C362.37,568.62 364.79,605.39 365.57,634.82 C377.99,634.61 396.27,634.17 411.22,633.27 C410.86,595.97 409.72,541.76 406.66,482.96 C400.69,487.34 394.24,489 390.55,489 Z" id="Path" fill="#F2F2F2" fillRule="nonzero" />
              <path d="M399.53,382.61 C393.42,316.34 384.23,252.83 370.44,208.61 L369.54,208.39 C370.31,217.79 370.84,224.91 370.85,226.39 C370.85,234.39 324.43,234.39 324.43,225.65 C324.43,223.29 323.97,216.81 323.3,208.65 C321.82,208.97 320.42,209.3 319.13,209.65 C322.57,219.92 331.92,283.1 341.35,361 L399.53,382.61 Z" id="Path" fill="#F2F2F2" fillRule="nonzero" />
              <path d="M395.65,430.54 C398.336148,430.783304 400.982459,431.354208 403.53,432.24 C403.09,425.886667 402.62,419.533333 402.12,413.18 L395.65,430.54 Z" id="Path" fill="#F2F2F2" fillRule="nonzero" />
              <path d="M353.47,443.63 L353.47,443.63 C363.34,441.9 373.64,434.83 383.69,431.79 L398.82,391.14 L317.76,360.95 L289,438.12 C312.07,438.52 349.63,439.34 352.66,440.53 C353.094865,441.51308 353.368375,442.559847 353.47,443.63 Z" id="Path" fill="#D3D3D3" fillRule="nonzero" />
              <path d="M352,491 L352,491 C351.6441,495.062581 351.043004,499.099941 350.2,503.09 C347.2,503.66 327.49,504.82 302.1,505.33 L349.71,523.06 L362.43,488.92 C359.040337,489.994526 355.542541,490.692073 352,491 Z" id="Path" fill="#D3D3D3" fillRule="nonzero" />
              <path d="M605.65,151.81 C605.749487,140.156166 606.67178,128.523903 608.41,117 C612.632859,110.026748 614.821928,102.011707 614.73,93.86 C614.73,73.86 602.46,57.64 587.34,57.64 C572.22,57.64 560,73.88 560,93.88 C560,104.39 563.38,113.88 568.78,120.46 C567.55,129.63 565.04,141.14 563.22,149.01" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" />
              <rect id="Rectangle" fill="#EFEFEF" fillRule="nonzero" x="555.08" y="60.12" width="45.19" height="59.07" rx="3.79" />
              <path d="M406.39,226 C425.78,224 485.7,227.51 535.48,258.71 C538.86,245.2 551.69,148.22 551.69,148.22 L609.1,152 C609.1,152 621.93,277.62 596.27,342.45 C587.27,361.37 509,337.36 468.44,323.45" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" />
              <path d="M272.99,430.38 L271.14,437.85 C271.14,437.85 348.28,438.8 352.68,440.53 C355.81,446.16 352.76,493.09 350.18,503.09 C346.102834,503.86357 310.761344,505.740781 272.391912,505.555782 C226.440499,505.334226 176.14624,502.154931 170.01,490.58 C158.75,469.34 184.45,223.73 255.09,240.34 C279.84,246.2 293.631626,270.183019 297.33,271.2 C301.028374,272.216981 269,245 268,243.89 C267,242.78 301.425861,216.22503 323.35,208.66 C337,203.950001 352.68,203.950001 369.71,208.66 C514.860931,248.80449 510.831588,619.910772 487,622.82 L411.8,632 L365.57,634.82 L222.69,622.82 C217.38,616.67 208.9,566.79 208,503.09 L272.391912,505.555782 L350.18,503.09 L352.68,440.53 L271.14,437.85" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" />
              <path d="M382.89,488.71 C386.68,536.3 389.34,580.11 390.23,610.86" id="Path" stroke="#D8D8D8" strokeWidth="2" strokeLinecap="round" />
              <path d="M354,244.51 C359.93,274.51 365.87,318.01 371.18,365.59" id="Path" stroke="#D8D8D8" strokeWidth="2" strokeLinecap="round" />
              <path d="M369.15,203.55 C370.15,215.27 370.84,224.66 370.85,226.37 C370.85,234.37 324.43,234.37 324.43,225.63 C324.43,219.23 321.08,182.71 319.29,163.63 C316.307009,131.833644 366.434953,171.729645 369.15,203.55 Z" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M407.82,165.72 L427.55,164.86 C427.94,160.38 428.15,155.86 428.15,151.2 C428.15,89.49 391.66,39.45 346.65,39.45 C301.64,39.45 265.15,89.45 265.15,151.2 C265.151021,158.120297 265.618749,165.032647 266.55,171.89 L319.84,169.56 L407.82,165.72 Z" id="Path" stroke="#000000" strokeWidth="2.5" fill="#000000" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M336.89,128.55 C335.01,129.98 332.437853,134.388667 331.42,132.66 C329,128.55 327.884989,125.877078 322.155827,124.964679 C316.426665,124.052279 310.884146,127.439732 309.08307,132.954431 C307.281995,138.469129 309.756706,144.474973 314.92,147.12 C316.533278,156.485318 319.515186,165.562447 323.77,174.06 C333.694505,193.880844 335.392266,198.880554 357.12,203.27 C359.361693,203.722868 361.64302,203.950666 363.93,203.95 C391.98,203.95 414.72,169.48 414.72,126.95 C414.72932,118.838404 413.871107,110.749072 412.16,102.82 L412.02,102.82 C402.02,98.88 392.33,94.64 384.45,86.76 C381.87,89.59 379.05,92.49 376.06,95.41 L336.89,128.55 Z" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
              <circle id="Oval" stroke="#000000" strokeWidth="2.5" fill="#000000" strokeLinecap="round" cx="311.62" cy="25.62" r="21.77" />
              <polyline id="Path" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points="277.58 437.94 310.53 349.46 411.8 387.18 395.65 430.54 374.71 486.77 356.25 536.35 273.6 505.57" />
              <path d="M353.47,443.62 C366.14,441.4 379.53,430.38 392.17,430.38 C408.53,430.38 420.02,440.74 420.02,453.7 C420.02,481.05 398.65,489 390.55,489 C376.95,489 374.66,486.91 372.13,485.12 C368.58,485.97 363.6,489.91 351.98,491" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
              <rect id="Rectangle" fill="#CCCCCC" fillRule="nonzero" x="548.27" y="48.51" width="57.56" height="15.15" rx="7.57" />
              <rect id="Rectangle" fill="#CCCCCC" fillRule="nonzero" transform="translate(591.387300, 111.725750) rotate(-29.886527) translate(-591.387300, -111.725750) " x="581.4231" y="108.98133" width="19.9283992" height="5.48883906" rx="2.73" />
              <rect id="Rectangle" fill="#CCCCCC" fillRule="nonzero" transform="translate(589.411533, 95.462277) rotate(25.310000) translate(-589.411533, -95.462277) " x="579.481533" y="92.7272767" width="19.86" height="5.47" rx="2.73" />
              <rect id="Rectangle" fill="#CCCCCC" fillRule="nonzero" transform="translate(561.409592, 107.672969) rotate(-106.630000) translate(-561.409592, -107.672969) " x="551.479592" y="104.937969" width="19.86" height="5.47" rx="2.73" />
              <rect id="Rectangle" fill="#CCCCCC" fillRule="nonzero" transform="translate(570.882559, 107.659893) rotate(-129.800000) translate(-570.882559, -107.659893) " x="560.952559" y="104.924893" width="19.86" height="5.47" rx="2.73" />
              <rect id="Rectangle" fill="#CCCCCC" fillRule="nonzero" transform="translate(582.501469, 102.990827) rotate(-176.120000) translate(-582.501469, -102.990827) " x="572.571469" y="100.255827" width="19.86" height="5.47" rx="2.73" />
              <polyline id="Path" stroke="#D8D8D8" strokeWidth="2" strokeLinecap="round" points="325.64 233.18 346.65 241 354.01 234.97 361.59 241 372.12 230.28" />
              <circle id="Oval" fill="#F2F2F2" fillRule="nonzero" cx="14.73" cy="324.89" r="14.73" />
              <circle id="Oval" fill="#F2F2F2" fillRule="nonzero" cx="37.45" cy="294.96" r="5.82" />
              <circle id="Oval" fill="#F2F2F2" fillRule="nonzero" cx="657.18" cy="389.55" r="5.82" />
              <circle id="Oval" fill="#F2F2F2" fillRule="nonzero" cx="457.74" cy="33.97" r="18.95" />
              <circle id="Oval" fill="#F2F2F2" fillRule="nonzero" cx="499.79" cy="9.81" r="9.47" />
              <rect id="Rectangle" stroke="#CCCCCC" strokeWidth="2" fill="#FFFFFF" fillRule="nonzero" x="54.71" y="9.81" width="139.31" height="79.85" rx="12" />
              <path d="M124.36,33.57 L124.36,65.9" id="Path" stroke="#000000" strokeWidth="8" fill="#FFFFFF" fillRule="nonzero" />
              <path d="M108.2,49.74 L140.52,49.74" id="Path" stroke="#000000" strokeWidth="8" fill="#FFFFFF" fillRule="nonzero" />
              <circle id="Oval" stroke="#CCCCCC" strokeWidth="2" cx="165.03" cy="30.33" r="2.22" />
              <circle id="Oval" stroke="#CCCCCC" strokeWidth="2" cx="180.15" cy="25.2" r="4.68" />
              <circle id="Oval" stroke="#CCCCCC" strokeWidth="2" cx="172.82" cy="72.2" r="2.93" />
              <path d="M65.7,37.61 L96.99,37.61" id="Path" stroke="#CCCCCC" strokeWidth="2" />
              <path d="M65.7,43.67 L96.99,43.67" id="Path" stroke="#CCCCCC" strokeWidth="2" />
              <path d="M65.7,49.74 L96.99,49.74" id="Path" stroke="#CCCCCC" strokeWidth="2" />
              <path d="M65.7,55.8 L96.99,55.8" id="Path" stroke="#CCCCCC" strokeWidth="2" />
              <path d="M65.7,61.87 L84.86,61.87" id="Path" stroke="#CCCCCC" strokeWidth="2" />
              <rect id="Rectangle" stroke="#CCCCCC" strokeWidth="2" transform="translate(175.675376, 49.141130) rotate(33.430000) translate(-175.675376, -49.141130) " x="172.820376" y="36.4211302" width="5.71" height="25.44" rx="2.855" />
              <path d="M174.96,45.04 L179.73,48.19" id="Path" stroke="#CCCCCC" strokeWidth="2" />
              <path d="M172.82,89.66 L242.22,119.19" id="Path" stroke="#CCCCCC" strokeWidth="2" />
              <rect id="Rectangle" fill="#D3D3D3" fillRule="nonzero" transform="translate(361.000833, 368.703092) rotate(20.430000) translate(-361.000833, -368.703092) " x="334.920833" y="360.858092" width="52.16" height="15.69" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </Image>
);

export const LeisureImage = () => (
  <Image>
    <svg viewBox="0 0 945 779" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="pattern-1" width="50" height="50" x="-9.78" y="42.68" patternUnits="userSpaceOnUse">
          <use xlinkHref="#image-2" />
        </pattern>
        <image id="image-2" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABGdBTUEAALGOfPtRkwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAzNJREFUeAHt3M2OozAMwHG61z3P+/W+LzXvN+c5zzhIRbCBJI6wncI/EuoXBce/GI3GbR8/0/RvmqbPxzR9y23XkGP8lTc+ZfuQ7Us2jidJaB3r/D3SAzBaUzdN6+TJu05ffGLRP6yDk8juWGl9IGDYLJauCgHDBiOVhhoEDDsMNQgYthgqEDDsMZpBwPDBaAIBww+jCgKGL0YRBAx/jEMQMGIwdkHAiMPIQMCIxdiAgBGPsYCAMQbGDALGOBgJ5I9sT9no9EkStMNiMScQMLQSsr8Fhhz2mUBOb0PKMe/Y6TvlMwn01GX1aIZVZUgM85VK3aBaB28dnJzrjpW2TnH7fTBsFktXhYBhg5HKQQ0Chh2GGgQMWwwVCBj2GM0gYPhgNIGA4YdRBQHDF6MIAoY/xiEIGDEYuyBgxGFkIGDEYmxAwIjHWEDAGANjBgFjHIwEQk99sG8f01NPy7JjWF1Z6KkPhCGhfNBTV4JYVUbCkO1L3aBax28dnJyLnvo64aX7YNgslq4KAcMGIxWAGgQMOww1CBi2GCoQMOwxmkHA8MFoAgHDD6MKAoYvRhEEDH+MQxAwYjB2QcCIw8hAwIjF2ICAEY+xgIAxBsYMAsY4GAmEnjo99bQO6uOulUtPvb42sj0sFws99Szd5ScsMeTM9NTL6d++ao0hZ0ufIegbTsGd8nMVMsO3+fmQLhAw7P5UVoOAYYeRrlUqEDBsMVQgYNhjNIOA4YPRBAKGH0YVBAxfjCIIGP4YhyBgxGDsgoARh5GBgBGLsQEBIx5jAQFjDIwZBIxxMBIIPXV66mkd1MddK5eeen1tZHtYLhZ66lm6y09YYsiZ6amX07991RpDzkZPfZvy40dOGN+qjuErXK/gXufT3r5zfGqQd56sFjbt7z1fFYh3cNoEXiG+ZpArTFYDHDXfJpCo4FoTeKX4qiBXmmwLcPR8iyDRwdUSeMX4DkGuONkS8Cjz3QUZJbijBF45vgzkypPdAx5tvhuQ0YL7P4F3iG8BucNk18CjzncGGTW4VwLvFN/cD5GJP2WbfzdWbtO/gG/3zSWZd9c4e7HQUx9s8SUQKqOjNs6ujNfxfgGAxM6f6FnQSQAAAABJRU5ErkJggg==" />
        <pattern id="pattern-3" width="50" height="50" x="-49.06" y="-49.13" patternUnits="userSpaceOnUse">
          <use xlinkHref="#image-4" />
        </pattern>
        <image id="image-4" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABGdBTUEAALGOfPtRkwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAzNJREFUeAHt3M2OozAMwHG61z3P+/W+LzXvN+c5zzhIRbCBJI6wncI/EuoXBce/GI3GbR8/0/RvmqbPxzR9y23XkGP8lTc+ZfuQ7Us2jidJaB3r/D3SAzBaUzdN6+TJu05ffGLRP6yDk8juWGl9IGDYLJauCgHDBiOVhhoEDDsMNQgYthgqEDDsMZpBwPDBaAIBww+jCgKGL0YRBAx/jEMQMGIwdkHAiMPIQMCIxdiAgBGPsYCAMQbGDALGOBgJ5I9sT9no9EkStMNiMScQMLQSsr8Fhhz2mUBOb0PKMe/Y6TvlMwn01GX1aIZVZUgM85VK3aBaB28dnJzrjpW2TnH7fTBsFktXhYBhg5HKQQ0Chh2GGgQMWwwVCBj2GM0gYPhgNIGA4YdRBQHDF6MIAoY/xiEIGDEYuyBgxGFkIGDEYmxAwIjHWEDAGANjBgFjHIwEQk99sG8f01NPy7JjWF1Z6KkPhCGhfNBTV4JYVUbCkO1L3aBax28dnJyLnvo64aX7YNgslq4KAcMGIxWAGgQMOww1CBi2GCoQMOwxmkHA8MFoAgHDD6MKAoYvRhEEDH+MQxAwYjB2QcCIw8hAwIjF2ICAEY+xgIAxBsYMAsY4GAmEnjo99bQO6uOulUtPvb42sj0sFws99Szd5ScsMeTM9NTL6d++ao0hZ0ufIegbTsGd8nMVMsO3+fmQLhAw7P5UVoOAYYeRrlUqEDBsMVQgYNhjNIOA4YPRBAKGH0YVBAxfjCIIGP4YhyBgxGDsgoARh5GBgBGLsQEBIx5jAQFjDIwZBIxxMBIIPXV66mkd1MddK5eeen1tZHtYLhZ66lm6y09YYsiZ6amX07991RpDzkZPfZvy40dOGN+qjuErXK/gXufT3r5zfGqQd56sFjbt7z1fFYh3cNoEXiG+ZpArTFYDHDXfJpCo4FoTeKX4qiBXmmwLcPR8iyDRwdUSeMX4DkGuONkS8Cjz3QUZJbijBF45vgzkypPdAx5tvhuQ0YL7P4F3iG8BucNk18CjzncGGTW4VwLvFN/cD5GJP2WbfzdWbtO/gG/3zSWZd9c4e7HQUx9s8SUQKqOjNs6ujNfxfgGAxM6f6FnQSQAAAABJRU5ErkJggg==" />
        <pattern id="pattern-5" width="50" height="50" x="9.03" y="-48.58" patternUnits="userSpaceOnUse">
          <use xlinkHref="#image-6" />
        </pattern>
        <image id="image-6" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABGdBTUEAALGOfPtRkwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAzNJREFUeAHt3M2OozAMwHG61z3P+/W+LzXvN+c5zzhIRbCBJI6wncI/EuoXBce/GI3GbR8/0/RvmqbPxzR9y23XkGP8lTc+ZfuQ7Us2jidJaB3r/D3SAzBaUzdN6+TJu05ffGLRP6yDk8juWGl9IGDYLJauCgHDBiOVhhoEDDsMNQgYthgqEDDsMZpBwPDBaAIBww+jCgKGL0YRBAx/jEMQMGIwdkHAiMPIQMCIxdiAgBGPsYCAMQbGDALGOBgJ5I9sT9no9EkStMNiMScQMLQSsr8Fhhz2mUBOb0PKMe/Y6TvlMwn01GX1aIZVZUgM85VK3aBaB28dnJzrjpW2TnH7fTBsFktXhYBhg5HKQQ0Chh2GGgQMWwwVCBj2GM0gYPhgNIGA4YdRBQHDF6MIAoY/xiEIGDEYuyBgxGFkIGDEYmxAwIjHWEDAGANjBgFjHIwEQk99sG8f01NPy7JjWF1Z6KkPhCGhfNBTV4JYVUbCkO1L3aBax28dnJyLnvo64aX7YNgslq4KAcMGIxWAGgQMOww1CBi2GCoQMOwxmkHA8MFoAgHDD6MKAoYvRhEEDH+MQxAwYjB2QcCIw8hAwIjF2ICAEY+xgIAxBsYMAsY4GAmEnjo99bQO6uOulUtPvb42sj0sFws99Szd5ScsMeTM9NTL6d++ao0hZ0ufIegbTsGd8nMVMsO3+fmQLhAw7P5UVoOAYYeRrlUqEDBsMVQgYNhjNIOA4YPRBAKGH0YVBAxfjCIIGP4YhyBgxGDsgoARh5GBgBGLsQEBIx5jAQFjDIwZBIxxMBIIPXV66mkd1MddK5eeen1tZHtYLhZ66lm6y09YYsiZ6amX07991RpDzkZPfZvy40dOGN+qjuErXK/gXufT3r5zfGqQd56sFjbt7z1fFYh3cNoEXiG+ZpArTFYDHDXfJpCo4FoTeKX4qiBXmmwLcPR8iyDRwdUSeMX4DkGuONkS8Cjz3QUZJbijBF45vgzkypPdAx5tvhuQ0YL7P4F3iG8BucNk18CjzncGGTW4VwLvFN/cD5GJP2WbfzdWbtO/gG/3zSWZd9c4e7HQUx9s8SUQKqOjNs6ujNfxfgGAxM6f6FnQSQAAAABJRU5ErkJggg==" />
        <pattern id="pattern-7" width="50" height="50" x="39.99" y="62.66" patternUnits="userSpaceOnUse">
          <use xlinkHref="#image-8" />
        </pattern>
        <image id="image-8" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABGdBTUEAALGOfPtRkwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAzNJREFUeAHt3M2OozAMwHG61z3P+/W+LzXvN+c5zzhIRbCBJI6wncI/EuoXBce/GI3GbR8/0/RvmqbPxzR9y23XkGP8lTc+ZfuQ7Us2jidJaB3r/D3SAzBaUzdN6+TJu05ffGLRP6yDk8juWGl9IGDYLJauCgHDBiOVhhoEDDsMNQgYthgqEDDsMZpBwPDBaAIBww+jCgKGL0YRBAx/jEMQMGIwdkHAiMPIQMCIxdiAgBGPsYCAMQbGDALGOBgJ5I9sT9no9EkStMNiMScQMLQSsr8Fhhz2mUBOb0PKMe/Y6TvlMwn01GX1aIZVZUgM85VK3aBaB28dnJzrjpW2TnH7fTBsFktXhYBhg5HKQQ0Chh2GGgQMWwwVCBj2GM0gYPhgNIGA4YdRBQHDF6MIAoY/xiEIGDEYuyBgxGFkIGDEYmxAwIjHWEDAGANjBgFjHIwEQk99sG8f01NPy7JjWF1Z6KkPhCGhfNBTV4JYVUbCkO1L3aBax28dnJyLnvo64aX7YNgslq4KAcMGIxWAGgQMOww1CBi2GCoQMOwxmkHA8MFoAgHDD6MKAoYvRhEEDH+MQxAwYjB2QcCIw8hAwIjF2ICAEY+xgIAxBsYMAsY4GAmEnjo99bQO6uOulUtPvb42sj0sFws99Szd5ScsMeTM9NTL6d++ao0hZ0ufIegbTsGd8nMVMsO3+fmQLhAw7P5UVoOAYYeRrlUqEDBsMVQgYNhjNIOA4YPRBAKGH0YVBAxfjCIIGP4YhyBgxGDsgoARh5GBgBGLsQEBIx5jAQFjDIwZBIxxMBIIPXV66mkd1MddK5eeen1tZHtYLhZ66lm6y09YYsiZ6amX07991RpDzkZPfZvy40dOGN+qjuErXK/gXufT3r5zfGqQd56sFjbt7z1fFYh3cNoEXiG+ZpArTFYDHDXfJpCo4FoTeKX4qiBXmmwLcPR8iyDRwdUSeMX4DkGuONkS8Cjz3QUZJbijBF45vgzkypPdAx5tvhuQ0YL7P4F3iG8BucNk18CjzncGGTW4VwLvFN/cD5GJP2WbfzdWbtO/gG/3zSWZd9c4e7HQUx9s8SUQKqOjNs6ujNfxfgGAxM6f6FnQSQAAAABJRU5ErkJggg==" />
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="-" transform="translate(-1623.000000, -109.000000)">
          <g id="hiker-man-monochrome" transform="translate(1623.000000, 110.000000)">
            <g id="shadows" transform="translate(440.000000, 112.000000)" fillRule="nonzero">
              <path d="M70.77,92.68 C71.39,102.68 72.77,192.68 40.22,205.02 C76.76,207.11 89.05,202.1 89.05,202.1 L91.14,193.74 L93.72,185.44 L96.25,168.52 L98,140.76 L96.72,113.94 L91.55,116.05 L86.55,113.68 L75.19,101.46 L70.77,92.68 Z" id="Path" fill="url(#pattern-1)" />
              <polygon id="Path" fill="url(#pattern-3)" points="0.94 14.58 0.94 19.32 9.39 14.45 30.99 6.87 31.63 0.87 10.9 1.57 2.17 6.39" />
              <polygon id="Path" fill="url(#pattern-5)" points="61.36 1.75 111.01 1.42 117.25 4.87 121.04 12.72 120.62 52.77 106.99 40.66 90.41 33.08 76.88 31.9 72.61 24.68 63.61 13.97 59.03 12.6" />
              <polygon id="Path" fill="url(#pattern-7)" points="120.62 134.9 121.04 174.18 120.67 213.31 117.31 221.38 108 224.71 96.87 223.81 89.99 195.38 94.02 187.04 97.98 149.5 97.56 114.12 100.72 112.66" />
            </g>
            <g id="vector">
              {/* background blob */}
              <path d="M705.73,96.79 C609.91,50.5033333 499.046667,33.42 373.14,45.54 C301.25,49.16 235.73,61.88 199,101.89 C151.91,153.22 152.59,249.94 145.45,338.16 C138.31,426.38 123.19,506.27 146.13,581.06 C164.88,642.61 209.53,700.93 263.98,725.91 C350.15,666.27 514.48,578.72 671.71,518.23 C674.496667,515.736667 677.33,513.223333 680.21,510.69 C744.66,453.74 830.67,382.69 841,305 C851.23,227.16 788.917291,136.974329 705.73,96.79 Z" id="Path" fill="transparent" fillRule="nonzero" />
              <path d="M454.16,57.74 C452.950684,61.9398209 452.341318,66.2895463 452.35,70.66 C452.35,86.93 460.56,100.78 472.05,105.99 L470.59,120.1 C469.844478,127.305012 474.47,131.93 481.53,133.55 C488.59,135.17 496.36,135.55 497.03,133.27 C498.03,129.69 503.61,103.11 505.55,93.8 C508.002879,89.8096823 509.767471,85.4353893 510.77,80.86 L518,75 L516,56 L470.59,41.7674581 L454.16,57.74 Z" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" />
              <path d="M730.92,496.67 C722.57,493.81 695.25,457.67 695.25,414.78 C695.25,365 748,270.63 753,237 C756.19,215.63 770.58,27.36 879.86,27.36 C939.45,27.36 944.42,143.87 944.42,195.98 C944.42,317.71 767.42,421.4 767.42,484.63 C755.554217,489.503744 743.356767,493.527231 730.92,496.67 Z" id="Path" fill="#000000" fillRule="nonzero" />
              <path d="M744.36,492.15 C744.36,394.53 817.21,216.67 881.29,154.08" id="Path" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
              <path d="M323.68,687.66 C318.1,686 302.93,666.66 302.93,641.74 C302.93,617.74 309.67,582.74 309.67,550.27 C309.67,532.21 302.93,525.81 302.93,504.32 C302.93,470.07 335.39,459.64 346.77,459.64 C363.52,459.64 372.48,473.97 372.48,481.56 C372.48,492.15 369.48,500.19 369.48,511.91 C369.48,534.82 377.48,537.69 376.64,557.43 C374.14,615.14 350.18,671.56 329.12,684.36 L323.68,687.66 Z" id="Path" fill="#000000" fillRule="nonzero" />
              <path d="M323.68,687.66 C330.52,681.76 292.22,495.16 259,462.14 C222.86,426.21 193.15,407.24 183.34,395.47 C165.94,374.58 154.86,295.8 78.27,295.8 C58.01,295.8 10.27,312.55 1.68,383.44 C-1.13,406.71 -6.24,442.31 42.19,493.9 C74.81,528.66 115.61,516.69 155.49,554.35 C184.2,581.46 180.18,622.35 206.99,656.9 C228.44,684.5 284.13,721.73 323.68,687.66 Z" id="Path" fill="#000000" fillRule="nonzero" />
              <path d="M314.28,692.11 C314.28,645.28 166.55,433.92 107.44,403.69" id="Path" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
              <path d="M323.68,687.66 C322.21,676.56 316.01,582.26 333.58,547.9" id="Path" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
              <path d="M207,774.29 C251.2,711.16 646.13,495.78 883.38,456" id="Path" stroke="#000000" strokeWidth="7" strokeLinecap="round" />
              <path d="M440.69,131.48 L440.69,125.18 C440.69,118.552583 446.062583,113.18 452.69,113.18 L471.3,113.18" id="Path" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M560.62,246.9 L560.62,324.16 C560.62,330.787417 555.247417,336.16 548.62,336.16 L531.53,336.16" id="Path" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M501.48,113.18 L548.62,113.18 C555.247417,113.18 560.62,118.552583 560.62,125.18 L560.62,164.31" id="Path" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
              <polygon id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" points="451 700.74 451 726.74 380.4 726.74 380.4 715.74 424.14 695.65" />
              <path d="M604.15,675.81 C607.72,683.81 616.15,704.54 616.15,704.54 L580.92,726.69 L549,726.69 L545.26,714.45 L585.36,683.76 L604.15,675.81 Z" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" />
              <path d="M374.91,129.15 C363.6,118.61 344.24,93.5 343.6,76.94 C342.86,57.66 420.99,15.87 425.69,15.87 C426.035036,15.8815427 426.374592,15.9596406 426.69,16.1 C429.072551,12.3016549 432.186189,9.01465976 435.85,6.43 C445.53,-0.54 456.54,-1.8 460.44,3.58 C461.701959,5.4653922 462.1424,7.78312521 461.66,10 C460.865973,13.6489556 462.280429,6.36588113 461.67,10.05 C460.82,15.18 456.56,21.32 450,26.05 C446.174388,28.9069695 441.777865,30.9056989 437.11,31.91 C432.68,36.31 393.46,75.17 388.56,77.73 C391.36,80.37 405,93 413,101 C423.520484,111.520484 410.823818,120.903818 374.91,129.15 Z" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M410.99,168.49 C393.062137,167.455028 370,149.15 374,129.15 C378,109.15 399,102 413,104 C427,106 431.38,112 440.69,133 C450,154 428.917863,169.524972 410.99,168.49 Z" id="Path-2" stroke="#000000" strokeWidth="3" fill="#D8D8D8" />
              <path d="M536.7,225.94 C539.46,266.36 535.23,303.94 529.04,308.79 C515.04,319.79 405.54,320.29 398.54,312.29 C391.81,304.6 376.973508,140.870574 470.54,120.1 C480,118 491,118 499.19,123.86 C506.221359,128.890985 512.45,135.3 517.4,144.32" id="body" stroke="#000000" strokeWidth="2.5" fill="#D8D8D8" strokeLinecap="round" />
              <path d="M501.91,68.34 C504.07333,65.9501573 507.475337,65.1212142 510.495545,66.2480206 C513.515752,67.374827 515.543432,70.2295271 515.612741,73.4523429 C515.68205,76.6751588 515,78 510.81,80.87 C506.62,83.74 529.47,77.23 529.47,57.91 C529.47,50.3 527.4,47.18 522.2,40.59 C517,34 513.412714,32.8276392 507,28 C499.03,22 480,12 474,11 C468,10 461.759257,8.74317574 454.16,12 C447.16,15 442,18 438,26 C434,34 437.602284,44.025011 442,49 C446.397716,53.974989 450,56 454.16,57.74 C469.974052,64.3545313 477,56 480,52 C483,48 492,54.91 494,57.91 C496,60.91 500.774485,69.5944098 501.91,68.34 Z" id="Path" stroke="#000000" strokeWidth="2.5" fill="#C9C9C9" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M640.67,337.59 L569.72,689.33" id="Path" stroke="#000000" strokeWidth="7" strokeLinecap="round" />
              <path d="M677.16,156.69 L647.97,301.42" id="Path" stroke="#000000" strokeWidth="7" strokeLinecap="round" />
              <path d="M540.72,224 C554.72,240.2 602.64,296.08 629.25,319.29 C629.216163,324.695928 631.382044,329.883213 635.25,333.66 C642.66,341.08 654.04,341.72 660.66,335.11 C667.28,328.5 666.66,317.11 659.22,309.69 C656.239982,306.676767 652.395119,304.666952 648.22,303.94 C635.52,283.44 593.83,222.32 572.6,195.69" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" />
              <path d="M507.87,148.5 C533.74,129.27 576.39,175.77 575.69,188 C574.99,200.23 542.21,227.35 531,227.38 C517.31,227.4 485.85,164.87 507.87,148.5 Z" id="Path" stroke="#000000" strokeWidth="2.5" fill="#D8D8D8" strokeLinecap="round" />
              <path d="M531.14,305.74 C530.67121,306.897866 529.9544,307.938947 529.04,308.79 C520.31,315.65 474.38,318.43 439.38,317.6 C456.2,401.06 572.38,673 581.61,687.44 C588.79,688.98 605.21,681.8 607.77,677.18 C610.25,672.72 541.3,340.82 531.14,305.74 Z" id="Path" fill="#000000" fillRule="nonzero" />
              <path d="M402.29,314.1 C402.58,342.86 407.54,669.19 416.29,698.29 C424.29,702.29 445.29,703.29 452.29,700.29 C458.62,697.58 495.76,386.92 502.8,315.21 C469.77,319 417.22,318.45 402.29,314.1 Z" id="Path" fill="#000000" fillRule="nonzero" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </Image>
);

export const MiscellaneousImage = () => (
  <Image>

    <svg viewBox="0 0 706 651" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="-" transform="translate(-297.000000, -110.000000)">
          <g id="holding-phone-monochrome" transform="translate(296.000000, 110.000000)">
            <path d="M703,137.08 C684.2,71.78 580.83,27.45 498.44,15.78 C415.88,4.11 354.3,25.08 304.39,39 C289.94,42.95 276.47,46.33 263.23,49.51 C271.59,58.51 276.7,69.11 276.7,72.7 C276.7,79.3 261.84,136.26 247.8,136.26 C233.76,136.26 218.91,78.43 218.91,64.4 C218.923557,62.888517 219.027074,61.3791811 219.22,59.88 C200.65,64.3 181,69.18 158.39,75.5 C100.87,91.57 24.39,117.12 5.79,161.78 C-12.82,206.61 26.43,270.56 60.79,344.32 C95,417.92 124.39,501.49 182.08,534.14 C190.170822,538.695742 198.752359,542.318909 207.66,544.94 C208.01,543.23 208.33,541.66 208.6,540.27 C201.17,504.78 202.85,440.96 205.32,434.35 C205.32,434.35 343.26,462.29 352.32,464.07 C354.68,456.2 367.73,421.12 374.55,416.13 C381.37,411.14 448.55,388.06 448.55,388.06 C448.55,388.06 448.5,351.62 449.33,343.37 C352.75,276.51 410.81,218.37 414.11,222.47 C417.41,226.57 537.66,328.14 538,334.74 C538.31,341.97 523.76,402.45 512.07,438.47 C539.48,414.85 566.13,387.99 593.4,357.86 C655.94,288.83 721.75,202.55 703,137.08 Z M215.61,375.59 C199.1,375.59 152.88,310.38 152.88,283.97 C152.88,269.11 161.96,234.44 187.55,234.44 C194.98,234.44 211.49,247.65 213.96,250.95 C216.503812,253.584498 219.201899,256.065536 222.04,258.38 C221.52,261.01 220.04,268.29 218.52,275.89 C231,290 254.41,319.7 254.41,341.75 C254.41,360.74 250.28,375.59 215.61,375.59 Z M229.61,258.38 C218.05,258.38 191.61,220.38 191.61,174.19 C191.61,160.19 203.17,146.95 220.51,146.95 C260.13,146.95 263.43,229.49 263.43,236.09 C263.49,245.17 254.41,258.38 229.65,258.38 L229.61,258.38 Z" id="Shape" fill="transparent" fillRule="nonzero" />
            <path d="M236.25,35.51 C223.04,35.51 218.91,56.15 218.91,64.4 C218.91,78.4 233.77,136.22 247.8,136.22 C261.83,136.22 276.7,79.22 276.7,72.66 C276.7,66.1 259.36,35.51 236.25,35.51 Z" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M495.68,39.44 L297.11,0.47 C283.378114,-2.18090109 270.082735,6.75416516 267.35,20.47 L240.73,156.1 C261.4,177.77 263.49,230.85 263.49,236.1 C263.49,245.18 254.41,258.39 229.65,258.39 C227.39,258.39 224.56,256.92 221.47,254.25 L220.85,257.41 C221.64,258.09 222.04,258.41 222.04,258.41 C221.54,260.94 220.04,268.57 218.52,275.92 C231,290 254.41,319.7 254.41,341.75 C254.41,360.75 250.28,375.59 215.61,375.59 C211.61,375.59 205.95,371.82 199.61,365.72 L191.61,406.72 C189.436707,417.998303 195.080898,429.335837 205.39,434.4 C206,434.52 343.11,462.29 352.39,464.11 L352.39,464.11 C354.75,456.24 367.8,421.16 374.62,416.17 C381.44,411.18 448.62,388.1 448.62,388.1 C448.62,388.1 448.57,351.66 449.4,343.41 C352.82,276.55 410.88,218.41 414.18,222.51 C415.8,224.51 445.34,249.82 475.18,275.92 L515.67,69.2 C518.321376,55.4713291 509.391771,42.1774307 495.68,39.44 Z" id="Path" fill="#000000" fillRule="nonzero" />
            <path d="M450.19,30.59 L447.68,43.38 C446.386659,49.8944703 440.069621,54.1371238 433.55,52.87 L347.93,36.07 C341.418816,34.7717281 337.178684,28.4584436 338.44,21.94 L341,9.15" id="Path" fill="#5B5B5B" fillRule="nonzero" />
            <path d="M195.2,388 L369,424.42" id="Path" stroke="#F2F2F2" strokeWidth="3" />
            <circle id="Oval" fill="#5B5B5B" fillRule="nonzero" cx="311.67" cy="434.45" r="10.03" />
            <path d="M220.57,147 C203.23,147 191.67,160.2 191.67,174.24 C191.67,220.46 218.09,258.43 229.67,258.43 C254.43,258.43 263.51,245.22 263.51,236.14 C263.49,229.49 260.19,147 220.57,147 Z" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M218.52,275.89 C231,290 254.41,319.7 254.41,341.75 C254.41,360.75 250.28,375.59 215.61,375.59 C199.1,375.59 152.88,310.38 152.88,283.97 C152.88,269.11 161.96,234.44 187.55,234.44 C194.98,234.44 211.49,247.65 213.96,250.95 C216.503812,253.584498 219.201899,256.065536 222.04,258.38 C221.52,261.01 220.04,268.29 218.52,275.89" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M211.49,268.29 C212.55,269.35 215.13,272.04 218.49,275.89" id="Path" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M223.92,282.22 C223.92,282.22 211.43,267.38 204,260.78" id="Path" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M363,649.23 L381.16,576.59 C381.16,576.59 491.72,480 502.45,462.68 C513.18,445.36 538.36,344.23 538,334.74 C537.71,328.14 417.48,226.6 414.18,222.47 C410.88,218.34 352.82,276.47 449.4,343.37 C448.57,351.62 448.62,388.06 448.62,388.06 C448.62,388.06 381.44,411.15 374.62,416.13 C367.8,421.11 354.75,456.2 352.39,464.07 C343.31,462.29 205.39,434.35 205.39,434.35 C202.92,440.96 201.24,504.78 208.67,540.27 C203.67,565.86 183.9,649.27 183.9,649.27" id="Path" stroke="#000000" strokeWidth="2.5" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M338.31,505.43 C340.56,496.83 351.47,465.94 354.18,458.57" id="Path" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </g>
    </svg>
  </Image>
);

export const ShoppingImage = () => (
  <Image>
    <svg viewBox="0 0 1041 798" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="-" transform="translate(-1771.000000, -1502.000000)">
          <g id="shopping-cart-monochrome" transform="translate(1772.000000, 1503.000000)">
            <g id="vector">
              <path d="M738.26,68.3 C630.75,42.3 504.06,103.45 405.45,137 C393.04,141.23 381.09,145 369.53,148.44 L378.37,162.67 L381.49,171.36 L394.84,179.86 L406.84,193.23 L414.31,204.31 L411.12,211.17 L428.87,229.35 L448.78,243.21 L504.78,275.71 L513.63,275.59 L525.49,280.21 L530.26,288.53 L529.35,298.83 L521.9,304.36 L510.74,306.49 L504.74,311.08 L492.85,314.83 L478.22,310 L472.35,303.62 L438.22,307.12 L393.44,307.72 L362.66,306.39 C358.637492,317.053573 354.078338,327.50692 349,337.71 L346,344.42 L343.36,348 C340.05,353.62 337.09,357.76 334.72,360 L334.72,360 L325.91,369.18 L243.63,353 L228.37,312.9 C227.941645,311.97616 227.577449,311.023906 227.28,310.05 C226.9,308.76 227.19,304.92 228.13,299.19 L228.13,299.19 C230.746096,284.728174 234.225654,270.435939 238.55,256.39 L240.55,248.39 L245.55,234.85 C246.936667,230.89 248.403333,226.89 249.95,222.85 L250.16,222.3 L250.24,222.12 C256.79,205.23 264.63,188.32 273.63,173.79 C236.04,183.38 202.16,193.03 168.94,209.3 C101.63,242.24 37.26,302.5 27,370.75 C16.74,439 60.54,515.24 113,568.2 C165.46,621.16 226.45,650.83 303.6,711.09 C380.57,771.35 473.47,862.2 550.4,857 C627.32,851.47 688,750.12 764.05,644.67 C840.3,539.21 931.37,429.67 932.74,318.48 C934.11,207.08 845.77,94.09 738.26,68.3 Z M370.47,756.56 L335.35,701.89 L347.11,680.23 L376.11,685.58 L386.18,752.66 L370.47,756.56 Z" id="Shape" fillRule="nonzero" />
              <path d="M683.87,583.87 L543.38,306.49 C539.09,303.98 521.89,292.93 521.89,292.93" id="Path" stroke="#DFDFDF" strokeWidth="6.72" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M533.3,328.42 C531.62,322.87 526.55,311.42 526.55,311.42 C523.47,311.23 502.05,300.22 502.05,300.22" id="Path" stroke="#DFDFDF" strokeWidth="6.72" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M495.97,301.29 L562.55,274.13" id="Path" stroke="#DFDFDF" strokeWidth="6.72" strokeLinecap="round" strokeLinejoin="round" />
              <polygon id="Path" stroke="#000000" strokeWidth="3.36" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" points="17.79 724.99 0.68 740.8 41.75 794.67 54.47 783.42 34.91 735.5" />
              <polygon id="Path" stroke="#000000" strokeWidth="3.36" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" points="349.5 675.83 335.35 701.89 370.47 756.56 385.25 752.75 375.56 681.39" />
              <path d="M412.34,268 C405.34,262.67 389.74,249.9 381.34,240.65 C367.247446,225.131413 396.160426,196.516014 411.15,211.17 C417.85,217.72 430.43,231.75 434.93,234.59 C439.43,237.43 482.639919,268.681895 503.93,275.24 C507.589426,276.367234 510.404767,273.678901 515,275.24 C521.656063,277.501206 529.762354,284.585922 530.49,290.9 C531.72,301.57321 521.2,306.43 509.72,306.49" id="Path" stroke="#000000" strokeWidth="3.36" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M381.18,170.83 C397.24,177.13 414.08,201.35 413.57,205.99 C412.96,211.41 396.13,231.5 381.89,237.79" id="Path" stroke="#000000" strokeWidth="3.36" fill="#B6B6B6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M362.71,306.23 C351.5,335.61 339.05,357.89 332.92,361.44 C319.51,369.2 236.21,339.67 227.28,310.05 C224.28,300.2 261.28,140.95 322.28,132.67 C373.749068,125.683707 305.764065,116.720184 353.48,137.24 C392.36,153.96 389.83,211.5 376.17,264.24" id="Path" stroke="#000000" strokeWidth="3.36" fill="#B6B6B6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M290.63,239.5 C291.63,256.99 294.91,294.16 298.81,295.5 C353.93,313.87 449.28,305.77 465.74,304.67 C467.968932,304.53621 470.181239,304.201519 472.35,303.67 C476.663929,302.612743 482.98,313.83 491.98,313.83 C503.53,313.83 512.89,306.83 512.89,298.23 C512.89,289.63 503.53,282.63 491.98,282.63 C488.678072,282.615549 485.402294,283.215769 482.32,284.4 C463.41,277.2 417.27,264.7 349.4,262.82 C348.4,256.49 349.53,242.16 349.55,231.61" id="Path" stroke="#000000" strokeWidth="3.36" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M305.58,141.63 C353.42,131.85 362.07,221.15 357.41,227.73 C352.75,234.31 291.87,243.64 283.92,237.88 C275.97,232.12 269.39,149 305.58,141.63 Z" id="Path" stroke="#000000" strokeWidth="3.36" fill="#B6B6B6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M333.59,75.86 C329.95,72.43 324.59,62.33 324.59,52.86 C324.59,36.29 341.1,26.86 352.24,21.92 C360.72,18.21 367.85,0.68 387,0.68 C402.32,0.68 403.33,16.09 410.38,16.68 C428.63,18.2 438.86,18.89 438.86,32.14 C438.86,41.88 426.36,68.35 400.86,68.35 C367.016046,68.35 358.221257,99.0702227 333.59,75.86 Z" id="Path" stroke="#000000" strokeWidth="3.36" fill="#8C8C8C" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M336.62,82.19 C332.86,95.06 324.34,122.97 322.27,132.67 C319.762228,144.421397 330.304668,142.968814 341.68,146.84 C345.5,148.14 349.05,148.9 351.44,148.53 C351.72,145.27 357,118 359.76,117.7 C361.397407,117.522021 363.002206,118.633854 364.68,118.81 C381.78,120.55 397.77,101.1 400.39,75.36 C401.58,64.1 399.98,53.5 396.39,45 C391.702539,33.9015552 356.556651,71.6489034 348.35,64.17 C346.841626,62.7953851 344.880643,62.0230926 342.84,62 C337.62,62 333.4,67.13 333.4,73.49 C333.4,79.85 337.62,85 342.84,85 L343.49,85" id="Path" stroke="#000000" strokeWidth="3.36" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1021.75,688.53 L582.88,688.53 L582.88,593.31 C606.87,591.18 948.1,559 948.1,559 L948.1,351.9 L533.3,328.42 L582.88,593.31" id="Path" stroke="#DFDFDF" strokeWidth="6.72" strokeLinecap="round" strokeLinejoin="round" />
              <circle id="Oval" stroke="#DFDFDF" strokeWidth="6.72" strokeLinecap="round" strokeLinejoin="round" cx="618.15" cy="720.79" r="20.37" />
              <circle id="Oval" stroke="#DFDFDF" strokeWidth="6.72" strokeLinecap="round" strokeLinejoin="round" cx="1015.89" cy="720.79" r="20.37" />
              <path d="M549.5,415 L948.1,415" id="Path" stroke="#DFDFDF" strokeWidth="6.72" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M560.52,473.87 L948.1,473.87" id="Path" stroke="#DFDFDF" strokeWidth="6.72" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M462.27,315.03 L495.97,301.29" id="Path" stroke="#DFDFDF" strokeWidth="6.72" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M594.24,473.87 C589.89,461.52 543.57,329 543.57,329" id="Path" stroke="#DFDFDF" strokeWidth="6.72" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M463.93,490.66 C457.46,461.94 366.84,384.34 334.48,360.25 C334.002373,360.699337 333.479598,361.098121 332.92,361.44 C319.75,369.06 239.19,340.72 227.84,311.65 C223.57,317.76 206.49,359.96 206.49,374.58 C206.49,475.34 356.7,501.46 378.28,501.46 C375.15,515.53 342.11,675.27 343.67,678.71 C345.23,682.15 372.67,689.39 378.28,688.45 C399.73,676.76 469.15,513.8 463.93,490.66 Z" id="Path" fill="#000000" fillRule="nonzero" />
              <path d="M228,311.91 C201.82,358.78 14.6,726.58 14.6,726.58 L38,740.8 L310.71,445.71 L244,330.4 C236.31,324.52 230.51,318.24 228,311.91 Z" id="Path" fill="#000000" fillRule="nonzero" />
              <path d="M348.35,64.19 L348.35,64.19" id="Path" stroke="#000000" strokeWidth="3.36" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </Image>
);

export const TravelImage = () => (
  <Image>
    <svg viewBox="0 0 717 723" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="-" transform="translate(-1516.000000, -2882.000000)" fillRule="nonzero">
          <g id="travel-tickets-monochrome" transform="translate(1484.000000, 2866.000000)">
            <path d="M566.23,108.47 C595.87,152.13 592.36,216.31 619.54,287.47 C646.54,358.66 704.23,436.52 703.01,520.16 C702.01,603.63 642.01,692.54 562.72,715.68 C483.64,738.83 385.26,695.87 304.95,647.68 C224.46,599.29 162,545.63 105.05,475 C48.06,404.47 -3.5,317.14 0.19,229.81 C4,142.66 63.31,55.34 141,20.27 C218.69,-14.8 314.77,2.2 394.38,22.2 C473.82,42 536.6,64.81 566.23,108.47 Z" id="Path" />
            <path d="M300.14,675.08 C290.339559,675.05224 282.064359,667.793293 280.76,658.08 L203.15,74 C201.718124,63.2832608 209.243591,53.4343454 219.96,52 L477.89,17.81 C478.74217,17.6986391 479.600586,17.6418567 480.46,17.64 C490.262602,17.6671244 498.54102,24.9251502 499.85,34.64 L577.45,618.7 C578.87064,629.410257 571.356372,639.25037 560.65,640.7 L302.71,674.91 C301.857876,675.021826 300.999429,675.078611 300.14,675.08 L300.14,675.08 Z" id="Path" fill="#FFFFFF" />
            <path d="M480.46,18.49 C489.827965,18.5149604 497.741645,25.4469003 499,34.73 L576.61,618.8 C577.929892,629.028987 570.749246,638.406696 560.53,639.8 L302.6,674.07 C301.784508,674.178356 300.962658,674.23181 300.14,674.23 C290.775353,674.205727 282.862902,667.279131 281.6,658 L204,73.93 C202.662665,63.6998261 209.845888,54.3129144 220.07,52.93 L478,18.66 C478.81534,18.54901 479.637143,18.4922187 480.46,18.49 L480.46,18.49 Z M480.46,16.79 C479.563675,16.7908554 478.668389,16.8509866 477.78,16.97 L219.85,51.24 C208.697209,52.7524978 200.860182,62.9888876 202.31,74.15 L279.92,658.22 C281.293128,668.343643 289.923695,675.902858 300.14,675.93 C301.036336,675.929467 301.931644,675.869335 302.82,675.75 L560.76,641.48 C571.908744,639.962548 579.740121,629.727702 578.29,618.57 L500.69,34.5 C499.308174,24.3769976 490.676833,16.8208409 480.46,16.79 L480.46,16.79 Z" id="Shape" fill="#000000" />
            <path d="M537.36,644.59 L560.76,641.48 C571.908744,639.962548 579.740121,629.727702 578.29,618.57 L500.69,34.5 C499.157703,23.3633962 488.927481,15.5489533 477.78,17 L454.38,20.11 L537.36,644.59 Z" id="Path" fill="#000000" />
            <path d="M499.29,228.98 L227.68,265.07" id="Path" stroke="#000000" strokeWidth="2" fill="#FFFFFF" />
            <circle id="Oval" fill="#DFDFDF" cx="345" cy="142.05" r="70" />
            <rect id="Rectangle" fill="#F8F8F8" transform="translate(350.367849, 146.147076) rotate(37.430000) translate(-350.367849, -146.147076) " x="314.537849" y="140.972076" width="71.66" height="10.35" />
            <polygon id="Path" fill="#F8F8F8" points="386.01 173.44 382.04 163.89 375.75 172.1" />
            <polygon id="Path" fill="#F8F8F8" points="363.9 150 364.57 109.06 357.39 103.56 346.11 136.39" />
            <polygon id="Path" fill="#F8F8F8" points="326.93 128.22 327.21 111.55 324.28 109.31 319.69 122.68" />
            <polygon id="Path" fill="#F8F8F8" points="357.61 158.22 318.26 169.56 311.08 164.06 339.82 144.6" />
            <polygon id="Path" fill="#F8F8F8" points="326.93 128.22 310.91 132.84 307.99 130.6 319.69 122.68" />
            <polygon id="Path" fill="#000000" points="466.88 585.46 425.23 272.03 444.67 269.45 486.32 582.88" />
            <rect id="Rectangle" fill="#DFDFDF" transform="translate(405.109188, 374.982678) rotate(82.430000) translate(-405.109188, -374.982678) " x="305.714188" y="365.177678" width="198.79" height="19.61" />
            <path d="M336.06,269.43 L386.21,646.83" id="Path" stroke="#000000" strokeWidth="2" fill="#FFFFFF" strokeLinecap="round" />
            <rect id="Rectangle" fill="#000000" transform="translate(288.121027, 293.232010) rotate(82.430000) translate(-288.121027, -293.232010) " x="285.176027" y="276.08201" width="5.89" height="34.3" />
            <rect id="Rectangle" fill="#000000" transform="translate(296.269199, 354.560433) rotate(82.430000) translate(-296.269199, -354.560433) " x="293.324199" y="337.410433" width="5.89" height="34.3" />
            <rect id="Rectangle" fill="#000000" transform="translate(300.793850, 387.739550) rotate(82.519114) translate(-300.793850, -387.739550) " x="297.853271" y="370.615294" width="5.88115836" height="34.2485114" />
            <rect id="Rectangle" fill="#000000" transform="translate(307.650250, 438.872750) rotate(82.519114) translate(-307.650250, -438.872750) " x="304.709671" y="421.748494" width="5.88115836" height="34.2485114" />
            <rect id="Rectangle" fill="#000000" transform="translate(291.235018, 316.662830) rotate(82.430000) translate(-291.235018, -316.662830) " x="282.610018" y="299.51283" width="17.25" height="34.3" />
            <rect id="Rectangle" fill="#000000" transform="translate(298.076521, 368.201556) rotate(82.430000) translate(-298.076521, -368.201556) " x="289.451521" y="351.051556" width="17.25" height="34.3" />
            <rect id="Rectangle" fill="#000000" transform="translate(305.514358, 424.168738) rotate(82.430000) translate(-305.514358, -424.168738) " x="296.889358" y="407.018738" width="17.25" height="34.3" />
            <rect id="Rectangle" fill="#000000" transform="translate(310.771504, 463.730786) rotate(82.430000) translate(-310.771504, -463.730786) " x="306.461504" y="446.580786" width="8.62" height="34.3" />
            <rect id="Rectangle" fill="#000000" transform="translate(289.391081, 302.786712) rotate(82.430000) translate(-289.391081, -302.786712) " x="288.251081" y="285.636712" width="2.28" height="34.3" />
            <rect id="Rectangle" fill="#000000" transform="translate(314.907634, 494.872050) rotate(82.430000) translate(-314.907634, -494.872050) " x="311.962634" y="477.72205" width="5.89" height="34.3" />
            <rect id="Rectangle" fill="#000000" transform="translate(317.760117, 516.324296) rotate(82.430000) translate(-317.760117, -516.324296) " x="309.135117" y="499.174296" width="17.25" height="34.3" />
            <rect id="Rectangle" fill="#000000" transform="translate(315.926092, 502.446861) rotate(82.430000) translate(-315.926092, -502.446861) " x="314.786092" y="485.296861" width="2.28" height="34.3" />
            <rect id="Rectangle" fill="#000000" transform="translate(308.515500, 445.272500) rotate(82.519114) translate(-308.515500, -445.272500) " x="307.377211" y="428.148244" width="2.27657743" height="34.2485114" />
            <rect id="Rectangle" fill="#000000" transform="translate(309.748270, 455.988799) rotate(82.430000) translate(-309.748270, -455.988799) " x="308.60827" y="438.838799" width="2.28" height="34.3" />
            <path d="M145.12,738.07 C134.534811,738.048304 125.264722,730.966872 122.46,720.76 L34.6,399.76 C31.1807375,387.242737 38.5537889,374.32311 51.07,370.9 L90.07,360.23 C98.0167542,387.169308 126.0604,402.795338 153.15044,395.37867 C180.240479,387.962003 196.413726,360.230342 189.53,333 L228.53,322.33 C234.544023,320.676365 240.968863,321.483536 246.386944,324.573418 C251.805026,327.6633 255.771067,332.781954 257.41,338.8 L345.27,659.8 C348.678392,672.32071 341.3116,685.238316 328.8,688.68 L289.8,699.35 C281.845734,672.414462 253.803159,656.793498 226.714176,664.208386 C199.625193,671.623273 183.447447,699.348372 190.32,726.58 L151.32,737.25 C149.299144,737.798574 147.213985,738.074353 145.12,738.07 L145.12,738.07 Z" id="Path" fill="#FFFFFF" />
            <path d="M234.73,322.34 C244.924059,322.362138 253.854295,329.174305 256.57,339 L344.43,660 C346.016977,665.79501 345.236401,671.983124 342.260056,677.202511 C339.283711,682.421899 334.355506,686.244835 328.56,687.83 L290.37,698.3 C282.092668,671.167583 253.733659,655.542272 226.375608,663.040224 C199.017556,670.538176 182.587562,698.438696 189.3,726 L151.12,736.45 C145.32353,738.042787 139.131578,737.264943 133.909172,734.287946 C128.686766,731.31095 124.862701,726.379232 123.28,720.58 L35.42,399.58 C32.1329962,387.514559 39.2322572,375.065131 51.29,371.75 L89.46,361.3 C97.5529155,388.661679 126.043919,404.524992 153.565209,396.992706 C181.086499,389.46042 197.528513,361.299416 190.56,333.63 L228.73,323.18 C230.684739,322.642708 232.702763,322.370275 234.73,322.37 L234.73,322.34 Z M234.73,320.67 C232.550812,320.670909 230.381551,320.963507 228.28,321.54 L188.47,332.4 C188.52,332.57 188.58,332.74 188.62,332.9 C193.405573,350.377433 188.503525,369.080319 175.76041,381.963463 C163.017296,394.846607 144.369097,399.952752 126.84041,395.358463 C109.311723,390.764174 95.5655726,377.167433 90.78,359.69 C90.78,359.52 90.7,359.35 90.65,359.18 L50.84,370.08 C37.8689714,373.633949 30.2322725,387.027268 33.78,400 L121.64,721 C123.33967,727.233526 127.448995,732.534997 133.061793,735.735342 C138.674592,738.935688 145.329863,739.772052 151.56,738.06 L191.36,727.17 C186.576213,709.690781 191.480864,690.987196 204.226419,678.104706 C216.971974,665.222216 235.622079,660.117976 253.15142,664.714706 C270.680761,669.311435 284.426214,682.910781 289.21,700.39 L329.01,689.49 C341.981029,685.936051 349.617728,672.542732 346.07,659.57 L258.21,338.57 C255.311036,327.989801 245.700163,320.650664 234.73,320.64 L234.73,320.67 Z" id="Shape" fill="#000000" />
            <rect id="Rectangle" fill="#000000" transform="translate(141.760242, 590.503192) rotate(-15.310000) translate(-141.760242, -590.503192) " x="139.860242" y="539.918192" width="3.8" height="101.17" />
            <rect id="Rectangle" fill="#000000" transform="translate(175.871500, 578.409800) rotate(-15.154068) translate(-175.871500, -578.409800) " x="173.981788" y="528.098701" width="3.77942429" height="100.622199" />
            <rect id="Rectangle" fill="#000000" transform="translate(196.165088, 575.605481) rotate(-15.310000) translate(-196.165088, -575.605481) " x="194.265088" y="525.020481" width="3.8" height="101.17" />
            <rect id="Rectangle" fill="#000000" transform="translate(227.093633, 567.138915) rotate(-15.310000) translate(-227.093633, -567.138915) " x="225.193633" y="516.553915" width="3.8" height="101.17" />
            <rect id="Rectangle" fill="#000000" transform="translate(155.232720, 586.816188) rotate(-15.310000) translate(-155.232720, -586.816188) " x="149.66772" y="536.231188" width="11.13" height="101.17" />
            <rect id="Rectangle" fill="#000000" transform="translate(187.594900, 577.956238) rotate(-15.310000) translate(-187.594900, -577.956238) " x="182.0299" y="527.371238" width="11.13" height="101.17" />
            <rect id="Rectangle" fill="#000000" transform="translate(218.369331, 569.537858) rotate(-15.310000) translate(-218.369331, -569.537858) " x="212.804331" y="518.952858" width="11.13" height="101.17" />
            <rect id="Rectangle" fill="#000000" transform="translate(238.856074, 563.928061) rotate(-15.310000) translate(-238.856074, -563.928061) " x="236.076074" y="513.343061" width="5.56" height="101.17" />
            <rect id="Rectangle" fill="#000000" transform="translate(146.520244, 589.191525) rotate(-15.310000) translate(-146.520244, -589.191525) " x="145.785244" y="538.606525" width="1.47" height="101.17" />
            <rect id="Rectangle" fill="#000000" transform="translate(258.416654, 558.563631) rotate(-15.310000) translate(-258.416654, -558.563631) " x="256.516654" y="507.978631" width="3.8" height="101.17" />
            <rect id="Rectangle" fill="#000000" transform="translate(271.891772, 554.876271) rotate(-15.310000) translate(-271.891772, -554.876271) " x="266.326772" y="504.291271" width="11.13" height="101.17" />
            <rect id="Rectangle" fill="#000000" transform="translate(263.179296, 557.261609) rotate(-15.310000) translate(-263.179296, -557.261609) " x="262.444296" y="506.676609" width="1.47" height="101.17" />
            <rect id="Rectangle" fill="#000000" transform="translate(231.125346, 566.045186) rotate(-15.310000) translate(-231.125346, -566.045186) " x="230.390346" y="515.460186" width="1.47" height="101.17" />
            <rect id="Rectangle" fill="#000000" transform="translate(230.664500, 563.648300) rotate(-15.154068) translate(-230.664500, -563.648300) " x="229.93348" y="513.337201" width="1.46204045" height="100.622199" />
            <rect id="Rectangle" fill="#DFDFDF" transform="translate(124.589421, 467.216036) rotate(-15.310000) translate(-124.589421, -467.216036) " x="78.734421" y="457.376036" width="91.71" height="19.68" />
            <rect id="Rectangle" fill="#DFDFDF" transform="translate(108.255492, 494.375280) rotate(-15.310000) translate(-108.255492, -494.375280) " x="85.3254923" y="489.45528" width="45.86" height="9.84" />
            <circle id="Oval" fill="#000000" cx="235.95" cy="443.25" r="25.13" />
            <path d="M470.38,284.57 L426.38,697.06 L480.47,702.82 L680.4,724.14 L681.61,724.27 L682.87,724.27 C697.14,724.27 709.74,711.16 711.59,693.75 L748.47,347.94 C750.38,330.02 740.21,314.15 725.59,311.82 L724.38,311.69 L524.46,290.33 L470.38,284.57 Z" id="Shape" fill="#000000" />
            <rect id="Rectangle" fill="#FFFFFF" transform="translate(627.209563, 379.672836) rotate(-80.570000) translate(-627.209563, -379.672836) " x="501.399563" y="279.037836" width="251.62" height="201.27" />
            <path d="M664.72,721.48 C664.31,721.48 663.91,721.48 663.5,721.48 L662.8,721.48 L409.16,694.48 L453,283.56 L707,310.65 L707.36,310.72 C721.65,313 731.36,328.46 729.53,345.92 L692.65,691.72 C690.87,708.41 678.65,721.48 664.78,721.48 L664.72,721.48 Z" id="Path" fill="#FFFFFF" />
            <path d="M453.72,284.5 L506.11,290.08 L706,311.41 L706.46,311.41 L707.13,311.52 C720.97,313.73 730.4,328.78 728.59,345.79 L691.71,691.59 C690.972558,699.345261 687.724881,706.648144 682.46,712.39 C677.46,717.68 671.14,720.59 664.68,720.59 C664.29,720.59 663.89,720.59 663.51,720.59 L663.04,720.59 L662.38,720.52 L462.48,699.19 L410.09,693.61 L453.72,284.5 L453.72,284.5 Z M452.21,282.63 L408.21,695.12 L462.29,700.89 L662.23,722.21 L663.44,722.34 L664.71,722.34 C678.98,722.34 691.57,709.23 693.43,691.82 L730.32,346 C732.23,328.07 722.06,312.21 707.43,309.87 L706.21,309.74 L506.29,288.39 L452.21,282.63 Z" id="Shape" fill="#000000" />
            <polygon id="Path" fill="#000000" points="579.34 420.02 482.18 553.32 646.21 570.81" />
            <polygon id="Path" fill="#000000" points="661.03 408.23 503.26 391.4 506.24 363.46 664.01 380.28" />
            <circle id="Oval" fill="#DFDFDF" cx="569.74" cy="516.15" r="74.49" />
          </g>
        </g>
      </g>
    </svg>
  </Image>
);
