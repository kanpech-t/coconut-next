export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  Address: (props: IconProps) => (
    <svg
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z"
        fill="white"
      />
    </svg>
  ),
  ArrowLeft: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 5L9.66939 11.2191C9.2842 11.6684 9.2842 12.3316 9.66939 12.7809L15 19"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  ArrowRight: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 19L14.3306 12.7809C14.7158 12.3316 14.7158 11.6684 14.3306 11.2191L9 5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  Bars: (props: IconProps) => (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.4375 3.46826H0.5625C0.234375 3.46826 0 3.23389 0 2.90576V1.40576C0 1.12451 0.234375 0.843262 0.5625 0.843262H20.4375C20.7188 0.843262 21 1.12451 21 1.40576V2.90576C21 3.23389 20.7188 3.46826 20.4375 3.46826ZM20.4375 10.9683H0.5625C0.234375 10.9683 0 10.7339 0 10.4058V8.90576C0 8.62451 0.234375 8.34326 0.5625 8.34326H20.4375C20.7188 8.34326 21 8.62451 21 8.90576V10.4058C21 10.7339 20.7188 10.9683 20.4375 10.9683ZM20.4375 18.4683H0.5625C0.234375 18.4683 0 18.2339 0 17.9058V16.4058C0 16.1245 0.234375 15.8433 0.5625 15.8433H20.4375C20.7188 15.8433 21 16.1245 21 16.4058V17.9058C21 18.2339 20.7188 18.4683 20.4375 18.4683Z"
        fill="white"
      />
    </svg>
  ),
  Cart: (props: IconProps) => (
    <svg
      width="24"
      height="21"
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.375 12.2969C21.2578 12.7266 20.8672 13 20.4375 13H8.99219L9.26562 14.25H19.7344C20.3203 14.25 20.7891 14.8359 20.6328 15.4219L20.4375 16.3594C21.1797 16.7109 21.6875 17.4531 21.6875 18.3125C21.6875 19.5234 20.6719 20.5 19.5 20.5C18.2891 20.5 17.3125 19.5234 17.3125 18.3125C17.3125 17.7266 17.5469 17.1797 17.9375 16.75H9.77344C10.1641 17.1797 10.4375 17.7266 10.4375 18.3125C10.4375 19.5234 9.42188 20.5 8.25 20.5C7.03906 20.5 6.0625 19.5234 6.0625 18.3125C6.0625 17.5312 6.49219 16.8281 7.15625 16.4375L4.38281 3H1.6875C1.14062 3 0.75 2.60938 0.75 2.0625V1.4375C0.75 0.929688 1.14062 0.5 1.6875 0.5H5.67188C6.10156 0.5 6.49219 0.851562 6.60938 1.28125L6.96094 3H22.2734C22.8984 3 23.3281 3.58594 23.2109 4.17188L21.375 12.2969Z"
        fill="white"
      />
    </svg>
  ),
  Catalog: (props: IconProps) => (
    <svg
      width="17"
      height="63"
      viewBox="0 0 17 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.432 57.3239C3.432 57.7825 3.52267 58.1932 3.704 58.5559C3.88533 58.9079 4.14667 59.2065 4.488 59.4519C4.81867 59.6972 5.224 59.8839 5.704 60.0119C6.184 60.1292 6.72267 60.1879 7.32 60.1879C8.13067 60.1879 8.824 60.0919 9.4 59.8999C9.96533 59.6972 10.3973 59.3825 10.696 58.9559C10.9947 58.5292 11.144 57.9852 11.144 57.3239C11.144 56.8545 11.0907 56.3905 10.984 55.9319C10.8773 55.4625 10.728 54.9559 10.536 54.4119H12.568C12.7707 54.9132 12.92 55.4092 13.016 55.8999C13.112 56.3905 13.16 56.9399 13.16 57.5479C13.16 58.7212 12.92 59.6919 12.44 60.4599C11.9493 61.2172 11.2667 61.7772 10.392 62.1399C9.50667 62.5025 8.47733 62.6839 7.304 62.6839C6.44 62.6839 5.65067 62.5665 4.936 62.3319C4.21067 62.0972 3.58667 61.7559 3.064 61.3079C2.54133 60.8492 2.136 60.2892 1.848 59.6279C1.56 58.9559 1.416 58.1879 1.416 57.3239C1.416 56.7585 1.49067 56.1932 1.64 55.6279C1.77867 55.0519 1.97067 54.5025 2.216 53.9799L4.184 54.7639C3.98133 55.1905 3.80533 55.6225 3.656 56.0599C3.50667 56.4865 3.432 56.9079 3.432 57.3239ZM4.088 48.1124C4.088 46.939 4.344 46.043 4.856 45.4244C5.35733 44.795 6.13067 44.4804 7.176 44.4804H13V46.1444L11.816 46.6084V46.6724C12.1253 46.9177 12.3813 47.1737 12.584 47.4404C12.7867 47.6964 12.9307 47.995 13.016 48.3364C13.112 48.667 13.16 49.0777 13.16 49.5684C13.16 50.0804 13.064 50.5444 12.872 50.9604C12.6693 51.3657 12.3653 51.6857 11.96 51.9204C11.544 52.155 11.0213 52.2724 10.392 52.2724C9.464 52.2724 8.78133 51.947 8.344 51.2964C7.896 50.6457 7.65067 49.6697 7.608 48.3684L7.56 46.8484H7.176C6.71733 46.8484 6.38133 46.971 6.168 47.2164C5.95467 47.451 5.848 47.7817 5.848 48.2084C5.848 48.635 5.912 49.051 6.04 49.4564C6.15733 49.8617 6.30667 50.267 6.488 50.6724L4.872 51.4564C4.62667 50.987 4.43467 50.4697 4.296 49.9044C4.15733 49.3284 4.088 48.731 4.088 48.1124ZM8.984 47.7764C9.00533 48.5444 9.144 49.0777 9.4 49.3764C9.656 49.675 9.992 49.8244 10.408 49.8244C10.7707 49.8244 11.032 49.7177 11.192 49.5044C11.3413 49.291 11.416 49.0137 11.416 48.6724C11.416 48.1604 11.2667 47.7284 10.968 47.3764C10.6587 47.0244 10.2267 46.8484 9.672 46.8484H8.952L8.984 47.7764ZM11.256 37.8801C11.256 37.6135 11.2293 37.3575 11.176 37.1121C11.1227 36.8668 11.0587 36.6215 10.984 36.3761H12.76C12.8667 36.6321 12.9573 36.9521 13.032 37.3361C13.1173 37.7095 13.16 38.1201 13.16 38.5681C13.16 39.0908 13.0747 39.5601 12.904 39.9761C12.7333 40.3815 12.44 40.7068 12.024 40.9521C11.5973 41.1868 11.0107 41.3041 10.264 41.3041H6.056V42.4401H5.048L4.248 41.1281L2.408 40.4401V38.9201H4.264V36.4721H6.056V38.9201H10.264C10.5947 38.9201 10.8453 38.8241 11.016 38.6321C11.176 38.4401 11.256 38.1895 11.256 37.8801ZM4.088 30.5586C4.088 29.3853 4.344 28.4893 4.856 27.8706C5.35733 27.2413 6.13067 26.9266 7.176 26.9266H13V28.5906L11.816 29.0546V29.1186C12.1253 29.364 12.3813 29.62 12.584 29.8866C12.7867 30.1426 12.9307 30.4413 13.016 30.7826C13.112 31.1133 13.16 31.524 13.16 32.0146C13.16 32.5266 13.064 32.9906 12.872 33.4066C12.6693 33.812 12.3653 34.132 11.96 34.3666C11.544 34.6013 11.0213 34.7186 10.392 34.7186C9.464 34.7186 8.78133 34.3933 8.344 33.7426C7.896 33.092 7.65067 32.116 7.608 30.8146L7.56 29.2946H7.176C6.71733 29.2946 6.38133 29.4173 6.168 29.6626C5.95467 29.8973 5.848 30.228 5.848 30.6546C5.848 31.0813 5.912 31.4973 6.04 31.9026C6.15733 32.308 6.30667 32.7133 6.488 33.1186L4.872 33.9026C4.62667 33.4333 4.43467 32.916 4.296 32.3506C4.15733 31.7746 4.088 31.1773 4.088 30.5586ZM8.984 30.2226C9.00533 30.9906 9.144 31.524 9.4 31.8226C9.656 32.1213 9.992 32.2706 10.408 32.2706C10.7707 32.2706 11.032 32.164 11.192 31.9506C11.3413 31.7373 11.416 31.46 11.416 31.1186C11.416 30.6066 11.2667 30.1746 10.968 29.8226C10.6587 29.4706 10.2267 29.2946 9.672 29.2946H8.952L8.984 30.2226ZM13 21.6224V24.0064H0.839999V21.6224H13ZM8.616 10.7154C9.34133 10.7154 9.98667 10.8167 10.552 11.0194C11.1173 11.2114 11.5973 11.494 11.992 11.8674C12.376 12.23 12.6693 12.6727 12.872 13.1954C13.064 13.718 13.16 14.31 13.16 14.9714C13.16 15.5794 13.064 16.1447 12.872 16.6674C12.6693 17.1794 12.376 17.622 11.992 17.9954C11.5973 18.3687 11.1173 18.662 10.552 18.8754C9.98667 19.078 9.34133 19.1794 8.616 19.1794C7.64533 19.1794 6.82933 19.0087 6.168 18.6674C5.496 18.326 4.984 17.8354 4.632 17.1954C4.28 16.5554 4.104 15.798 4.104 14.9234C4.104 14.102 4.28 13.3767 4.632 12.7474C4.984 12.118 5.496 11.622 6.168 11.2594C6.82933 10.8967 7.64533 10.7154 8.616 10.7154ZM8.616 16.7474C9.192 16.7474 9.67733 16.6887 10.072 16.5714C10.456 16.4434 10.7493 16.246 10.952 15.9794C11.144 15.7127 11.24 15.366 11.24 14.9394C11.24 14.5127 11.144 14.1714 10.952 13.9154C10.7493 13.6487 10.456 13.4567 10.072 13.3394C9.67733 13.2114 9.192 13.1474 8.616 13.1474C8.04 13.1474 7.56 13.2114 7.176 13.3394C6.792 13.4567 6.504 13.6487 6.312 13.9154C6.12 14.182 6.024 14.5287 6.024 14.9554C6.024 15.5847 6.24267 16.0434 6.68 16.3314C7.10667 16.6087 7.752 16.7474 8.616 16.7474ZM4.104 5.43312C4.104 4.89979 4.21067 4.41979 4.424 3.99312C4.63733 3.56646 4.95733 3.20379 5.384 2.90512V2.84112L4.264 2.64912V0.633122H13.016C13.848 0.633122 14.5467 0.798456 15.112 1.12912C15.6773 1.44912 16.104 1.93446 16.392 2.58512C16.6907 3.23579 16.84 4.04112 16.84 5.00112C16.84 5.61979 16.8027 6.19579 16.728 6.72912C16.6533 7.25179 16.52 7.76379 16.328 8.26512H14.424C14.5733 7.90246 14.696 7.53979 14.792 7.17712C14.8987 6.80379 14.9733 6.42512 15.016 6.04112C15.0693 5.64646 15.096 5.25179 15.096 4.85712C15.096 4.23846 14.9307 3.77979 14.6 3.48112C14.2693 3.17179 13.7733 3.01712 13.112 3.01712H12.936C12.7547 3.01712 12.568 3.01179 12.376 3.00112C12.184 2.97979 12.0133 2.96379 11.864 2.95312V3.01712C12.3227 3.31579 12.6533 3.67312 12.856 4.08912C13.0587 4.50512 13.16 4.97446 13.16 5.49712C13.16 6.53179 12.7653 7.34246 11.976 7.92912C11.176 8.50512 10.0667 8.79312 8.648 8.79312C7.688 8.79312 6.872 8.65979 6.2 8.39312C5.51733 8.12646 5 7.74246 4.648 7.24112C4.28533 6.72912 4.104 6.12646 4.104 5.43312ZM6.04 4.68112C6.04 5.05446 6.14133 5.36912 6.344 5.62512C6.536 5.87046 6.82933 6.05712 7.224 6.18512C7.608 6.30246 8.09333 6.36112 8.68 6.36112C9.55467 6.36112 10.2107 6.22246 10.648 5.94512C11.0747 5.66779 11.288 5.23579 11.288 4.64912C11.288 4.33979 11.2507 4.07312 11.176 3.84912C11.0907 3.62512 10.9573 3.44379 10.776 3.30512C10.584 3.15579 10.3387 3.04379 10.04 2.96912C9.74133 2.89446 9.37867 2.85712 8.952 2.85712H8.664C8.03467 2.85712 7.528 2.92112 7.144 3.04912C6.76 3.17712 6.48267 3.37446 6.312 3.64112C6.13067 3.90779 6.04 4.25446 6.04 4.68112Z"
        fill="white"
      />
    </svg>
  ),
  Close: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
      {...props}
    >
      <path
        d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
        fill="currentColor"
      />
    </svg>
  ),
  Custom: (props: IconProps) => (
    <svg
      width="28"
      height="24"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.2188 19.9219C10.5469 20.5781 11.2031 21 12 21H18V22.875C18 23.5312 17.4844 24 16.875 24H1.125C0.46875 24 0 23.5312 0 22.875V1.125C0 0.515625 0.46875 0 1.125 0H10.5V6.375C10.5 7.03125 10.9688 7.5 11.625 7.5H18V9.70312L12 15.6562V19.5C11.8125 19.5 11.625 19.4062 11.5312 19.2188C10.9688 18.0938 9.375 17.8125 8.4375 18.5625L7.78125 16.5938C7.64062 16.125 7.21875 15.8438 6.75 15.8438C6.23438 15.8438 5.8125 16.125 5.67188 16.5938L4.82812 19.1719C4.73438 19.3594 4.54688 19.5 4.3125 19.5H3.75C3.32812 19.5 3 19.875 3 20.25C3 20.6719 3.32812 21 3.75 21H4.3125C5.20312 21 5.95312 20.4844 6.23438 19.6406L6.75 18.1406L7.5 20.5312C7.73438 21.1406 8.57812 21.1875 8.90625 20.625L9.23438 19.875C9.375 19.6406 9.60938 19.5938 9.75 19.5938C9.84375 19.5938 10.0781 19.6406 10.2188 19.9219ZM18 5.71875V6H12V0H12.2812C12.5625 0 12.8438 0.140625 13.0781 0.328125L17.6719 4.92188C17.8594 5.15625 18 5.4375 18 5.71875ZM13.5 16.2656L21.0938 8.71875L24.2812 11.9062L16.6875 19.5H13.5V16.2656ZM26.625 7.875C27.0938 8.34375 27.0938 9.09375 26.625 9.5625L25.3594 10.8281L22.1719 7.64062L23.4375 6.375C23.9062 5.90625 24.6562 5.90625 25.125 6.375L26.625 7.875Z"
        fill="white"
      />
    </svg>
  ),
  Email: (props: IconProps) => (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.6094 4.96094C19.7656 4.84375 20 4.96094 20 5.15625V13.125C20 14.1797 19.1406 15 18.125 15H1.875C0.820312 15 0 14.1797 0 13.125V5.15625C0 4.96094 0.195312 4.84375 0.351562 4.96094C1.25 5.66406 2.38281 6.52344 6.36719 9.41406C7.1875 10 8.59375 11.2891 10 11.2891C11.3672 11.2891 12.8125 10 13.5938 9.41406C17.5781 6.52344 18.7109 5.66406 19.6094 4.96094ZM10 10C9.0625 10.0391 7.77344 8.86719 7.10938 8.39844C1.91406 4.64844 1.52344 4.29688 0.351562 3.35938C0.117188 3.20312 0 2.92969 0 2.61719V1.875C0 0.859375 0.820312 0 1.875 0H18.125C19.1406 0 20 0.859375 20 1.875V2.61719C20 2.92969 19.8438 3.20312 19.6094 3.35938C18.4375 4.29688 18.0469 4.64844 12.8516 8.39844C12.1875 8.86719 10.8984 10.0391 10 10Z"
        fill="white"
      />
    </svg>
  ),
  Facebook: () => (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.6875 10.5C19.6875 15.3438 16.1328 19.3672 11.4844 20.0703V13.3125H13.75L14.1797 10.5H11.4844V8.70312C11.4844 7.92188 11.875 7.17969 13.0859 7.17969H14.2969V4.79688C14.2969 4.79688 13.2031 4.60156 12.1094 4.60156C9.92188 4.60156 8.47656 5.96875 8.47656 8.39062V10.5H6.01562V13.3125H8.47656V20.0703C3.82812 19.3672 0.3125 15.3438 0.3125 10.5C0.3125 5.14844 4.64844 0.8125 10 0.8125C15.3516 0.8125 19.6875 5.14844 19.6875 10.5Z"
        fill="white"
      />
    </svg>
  ),
  Logo: (props: IconProps) => (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.3931 55.562C46.8948 55.562 47.4131 55.1655 47.5442 54.6808L55.9613 23.5508C56.0924 23.0658 55.8795 22.4116 55.4885 22.097L28.3239 0.230858C27.9326 -0.0838127 27.2997 -0.0754318 26.9171 0.249863L0.497453 22.7131C0.115148 23.0384 -0.0913042 23.7012 0.0391369 24.1863L8.24662 54.6805C8.37738 55.1652 8.89496 55.562 9.39707 55.562H46.3931ZM43.2975 51.3334C43.7993 51.3334 44.3176 50.9369 44.4486 50.4522L51.3324 24.9927C51.4635 24.5079 51.2506 23.8538 50.8596 23.5388L28.6234 5.64004C28.2321 5.32537 27.5992 5.33374 27.2166 5.65904L5.59138 24.0458C5.20908 24.3711 5.00263 25.0339 5.13339 25.5186L11.8439 50.4518C11.9743 50.9369 12.4922 51.3334 12.9943 51.3334H43.2975Z"
        fill="white"
      />
      <path
        d="M15.4906 51.7852C15.4906 51.7852 12.6318 35.7976 21.8783 28.9512C21.8783 28.9512 20.9611 32.3391 22.2316 33.8213C22.2316 33.8213 24.4901 30.2923 30.1183 27.9628C30.1183 27.9628 35.1485 26.2686 34.3018 19.2809C34.3018 19.2809 38.9603 27.6806 31.1957 30.8569C31.1957 30.8569 22.2316 33.8213 23.5022 40.3154C23.5022 40.3154 22.6198 41.127 19.9021 37.1387C19.9021 37.1387 14.82 43.7033 20.2551 54.2207L15.4906 51.7852Z"
        fill="white"
      />
      <path
        d="M25.833 55.562C25.833 55.562 17.3627 49.6329 27.1036 39.9626C27.1036 39.9626 27.5977 42.3627 29.2213 43.3508C29.2213 43.3508 27.6682 36.0097 34.5855 34.104C34.5855 34.104 38.891 33.0453 38.0442 24.081C38.0442 24.081 45.8085 38.1274 37.6912 45.4681C37.6912 45.4681 41.009 37.7038 38.8208 31.8453C38.8208 31.8453 38.6088 34.7394 35.2915 35.9392C35.2915 35.9392 28.8728 37.2098 31.9058 46.5268C31.9058 46.5268 29.2213 47.0917 26.8917 44.0565C26.8917 44.0565 21.8096 49.4213 27.0331 52.1738V55.562H25.833Z"
        fill="white"
      />
    </svg>
  ),
  Phone: (props: IconProps) => (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.2578 1.47656C20.6875 1.59375 21 1.94531 21 2.375C21 12.4141 12.875 20.5 2.875 20.5C2.40625 20.5 2.05469 20.2266 1.9375 19.7969L1 15.7344C0.921875 15.3047 1.11719 14.8359 1.54688 14.6406L5.92188 12.7656C6.3125 12.6094 6.74219 12.7266 7.01562 13.0391L8.96875 15.4219C12.0156 13.9766 14.4766 11.4766 15.8828 8.50781L13.5 6.55469C13.1875 6.28125 13.0703 5.85156 13.2266 5.46094L15.1016 1.08594C15.2969 0.65625 15.7656 0.421875 16.1953 0.539062L20.2578 1.47656Z"
        fill="white"
      />
    </svg>
  ),
  Quality: (props: IconProps) => (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M58.5001 72.0001C57.9005 72.0005 57.3144 71.8213 56.8177 71.4855C56.3209 71.1496 55.9362 70.6727 55.7131 70.1161L53.1811 63.7771L46.8331 61.104C46.2886 60.8636 45.8272 60.4676 45.507 59.9658C45.1868 59.464 45.0219 58.8788 45.0331 58.2836C45.0443 57.6885 45.2311 57.1099 45.57 56.6205C45.909 56.1312 46.3849 55.7528 46.9381 55.5331L53.2021 53.16L55.7131 46.8841C55.944 46.3356 56.3316 45.8675 56.8274 45.5383C57.3232 45.2092 57.905 45.0336 58.5001 45.0336C59.0952 45.0336 59.677 45.2092 60.1728 45.5383C60.6685 45.8675 61.0562 46.3356 61.2871 46.8841L63.8101 53.1841L70.1101 55.7071C70.6597 55.9369 71.129 56.3242 71.4591 56.82C71.7892 57.3159 71.9653 57.8983 71.9653 58.494C71.9653 59.0898 71.7892 59.6722 71.4591 60.1681C71.129 60.6639 70.6597 61.0512 70.1101 61.2811L63.8101 63.8041L61.2871 70.104C61.0659 70.6629 60.682 71.1424 60.1851 71.4805C59.6881 71.8185 59.1011 71.9996 58.5001 72.0001ZM30.0001 63.0001C28.704 63.0156 27.4377 62.6111 26.3908 61.8469C25.3438 61.0828 24.5724 60.0002 24.1921 58.7611L19.3501 43.6201L4.16109 38.5381C2.93518 38.1283 1.87124 37.3395 1.12295 36.2855C0.374659 35.2316 -0.0192531 33.967 -0.00189117 32.6746C0.0154707 31.3821 0.443207 30.1286 1.21954 29.0952C1.99587 28.0617 3.08061 27.3017 4.31709 26.9251L19.3861 22.3231L24.4621 7.16105C24.8395 5.91567 25.6202 4.83106 26.6813 4.07782C27.7425 3.32459 29.0239 2.94545 30.3241 3.00005C31.6204 3.00181 32.8812 3.42334 33.918 4.20155C34.9547 4.97976 35.7115 6.07279 36.0751 7.31705L40.6711 22.3621L55.7611 27.1921C56.9782 27.6003 58.0364 28.3806 58.786 29.4228C59.5357 30.4649 59.939 31.7163 59.939 33.0001C59.939 34.2838 59.5357 35.5352 58.786 36.5773C58.0364 37.6195 56.9782 38.3998 55.7611 38.8081L40.6441 43.6441L35.8081 58.7611C35.4278 60.0002 34.6564 61.0828 33.6094 61.8469C32.5624 62.6111 31.2962 63.0156 30.0001 63.0001ZM61.5001 21.0001C60.8313 21 60.1817 20.7765 59.6545 20.3651C59.1272 19.9536 58.7526 19.3778 58.5901 18.7291L57.5191 14.4391L53.2201 13.2841C52.5739 13.1104 52.0044 12.7258 51.6019 12.1913C51.1995 11.6569 50.9872 11.0032 50.999 10.3342C51.0107 9.66527 51.2457 9.01943 51.6666 8.49938C52.0876 7.97933 52.6703 7.61491 53.3221 7.46405L57.5221 6.48905L58.5901 2.27105C58.7527 1.62237 59.1273 1.04661 59.6545 0.635208C60.1818 0.22381 60.8313 0.000366211 61.5001 0.000366211C62.1688 0.000366211 62.8184 0.22381 63.3456 0.635208C63.8729 1.04661 64.2475 1.62237 64.4101 2.27105L65.4721 6.52505L69.7261 7.59005C70.3748 7.75263 70.9505 8.12728 71.3619 8.65451C71.7733 9.18174 71.9968 9.83131 71.9968 10.5001C71.9968 11.1688 71.7733 11.8184 71.3619 12.3456C70.9505 12.8728 70.3748 13.2475 69.7261 13.4101L65.4721 14.4751L64.4101 18.7291C64.2476 19.3778 63.8729 19.9536 63.3457 20.3651C62.8185 20.7765 62.1689 21 61.5001 21.0001Z"
        fill="#B2CA7A"
      />
    </svg>
  ),
  Ship: (props: IconProps) => (
    <svg
      width="31"
      height="24"
      viewBox="0 0 31 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.25 12C3.82812 12 3.5 11.6719 3.5 11.25V0.75C3.5 0.375 3.82812 0 4.25 0H14.75C15.125 0 15.5 0.375 15.5 0.75V11.25C15.5 11.6719 15.125 12 14.75 12H4.25ZM19.25 12C18.8281 12 18.5 11.6719 18.5 11.25V3.75C18.5 3.375 18.8281 3 19.25 3H26.75C27.125 3 27.5 3.375 27.5 3.75V11.25C27.5 11.6719 27.125 12 26.75 12H19.25ZM29.75 18H27.5V21H29.75C30.125 21 30.5 21.375 30.5 21.75V23.25C30.5 23.6719 30.125 24 29.75 24H1.25C0.828125 24 0.5 23.6719 0.5 23.25V21.75C0.5 21.375 0.828125 21 1.25 21H3.5V18H1.25C0.828125 18 0.5 17.6719 0.5 17.25V15.75C0.5 15.375 0.828125 15 1.25 15H29.75C30.125 15 30.5 15.375 30.5 15.75V17.25C30.5 17.6719 30.125 18 29.75 18ZM14 21V18H6.5V21H14ZM24.5 21V18H17V21H24.5Z"
        fill="white"
      />
    </svg>
  ),
  Truck: (props: IconProps) => (
    <svg
      width="30"
      height="24"
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.25 16.5C29.625 16.5 30 16.875 30 17.25V18.75C30 19.1719 29.625 19.5 29.25 19.5H27C27 21.9844 24.9844 24 22.5 24C20.0156 24 18 21.9844 18 19.5H12C12 21.9844 9.98438 24 7.5 24C5.01562 24 3 21.9844 3 19.5H2.25C0.984375 19.5 0 18.5156 0 17.25V2.25C0 1.03125 0.984375 0 2.25 0H17.25C18.4688 0 19.5 1.03125 19.5 2.25V4.5H21.5625C22.125 4.5 22.7344 4.78125 23.1562 5.20312L27.7969 9.84375C28.2188 10.2656 28.5 10.875 28.5 11.4375V16.5H29.25ZM7.5 21.75C8.71875 21.75 9.75 20.7656 9.75 19.5C9.75 18.2812 8.71875 17.25 7.5 17.25C6.23438 17.25 5.25 18.2812 5.25 19.5C5.25 20.7656 6.23438 21.75 7.5 21.75ZM22.5 21.75C23.7188 21.75 24.75 20.7656 24.75 19.5C24.75 18.2812 23.7188 17.25 22.5 17.25C21.2344 17.25 20.25 18.2812 20.25 19.5C20.25 20.7656 21.2344 21.75 22.5 21.75ZM26.25 12V11.4375L21.5625 6.75H19.5V12H26.25Z"
        fill="white"
      />
    </svg>
  ),
  Varietires: (props: IconProps) => (
    <svg
      width="60"
      height="72"
      viewBox="0 0 60 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M54.0479 71.9999C53.5849 72.0003 53.128 71.8935 52.7131 71.6879C52.2982 71.4823 51.9366 71.1834 51.6565 70.8147C51.3764 70.4459 51.1854 70.0174 51.0986 69.5625C51.0117 69.1077 51.0314 68.6389 51.1559 68.1929C51.5039 66.9359 51.8969 65.7689 52.2869 64.6199C56.1419 56.5679 52.8269 44.5709 48.5189 38.9579C44.8442 33.5275 42.6812 27.2168 42.2521 20.6739C41.8229 14.1311 43.1431 7.59187 46.0769 1.72794C46.4227 1.02127 47.0323 0.478704 47.7743 0.217149C48.5163 -0.0444052 49.3313 -0.00401756 50.0438 0.329611C50.7563 0.663239 51.3092 1.26341 51.5835 2.00081C51.8577 2.73821 51.8313 3.55383 51.5099 4.27194C49.0017 9.21695 47.8694 14.7454 48.2315 20.2783C48.5935 25.8112 50.4367 31.145 53.5679 35.7209C58.5929 42.1319 62.5259 57.0599 57.9689 66.5339C57.6149 67.5869 57.2549 68.6579 56.9339 69.8069C56.7579 70.4372 56.3806 70.9926 55.8596 71.3886C55.3385 71.7845 54.7023 71.9992 54.0479 71.9999ZM33.0479 71.9999C32.5849 72.0003 32.128 71.8935 31.7131 71.6879C31.2982 71.4823 30.9366 71.1834 30.6565 70.8147C30.3764 70.4459 30.1854 70.0174 30.0986 69.5625C30.0117 69.1077 30.0314 68.6389 30.1559 68.1929C30.5039 66.9359 30.8969 65.7689 31.2869 64.6199C35.1419 56.5679 31.8269 44.5709 27.5189 38.9579C23.8442 33.5275 21.6812 27.2168 21.2521 20.6739C20.8229 14.1311 22.1431 7.59187 25.0769 1.72794C25.4227 1.02127 26.0323 0.478704 26.7743 0.217149C27.5163 -0.0444052 28.3313 -0.00401756 29.0438 0.329611C29.7563 0.663239 30.3092 1.26341 30.5835 2.00081C30.8577 2.73821 30.8313 3.55383 30.5099 4.27194C28.0017 9.21695 26.8694 14.7454 27.2315 20.2783C27.5935 25.8112 29.4367 31.145 32.5679 35.7209C37.5929 42.1319 41.5259 57.0599 36.9689 66.5339C36.6149 67.5869 36.2549 68.6579 35.9339 69.8069C35.7579 70.4372 35.3806 70.9926 34.8596 71.3886C34.3385 71.7845 33.7023 71.9992 33.0479 71.9999ZM12.0479 71.9999C11.5849 72.0003 11.128 71.8935 10.7131 71.6879C10.2982 71.4823 9.93657 71.1834 9.65647 70.8147C9.37636 70.4459 9.18541 70.0174 9.09858 69.5625C9.01174 69.1077 9.03137 68.6389 9.15593 68.1929C9.50393 66.9359 9.89693 65.7689 10.2869 64.6199C14.1419 56.5679 10.8269 44.5709 6.51893 38.9579C2.84423 33.5275 0.68123 27.2168 0.252069 20.6739C-0.177092 14.1311 1.14306 7.59187 4.07693 1.72794C4.42272 1.02127 5.03228 0.478704 5.77427 0.217149C6.51627 -0.0444052 7.33131 -0.00401756 8.04382 0.329611C8.75632 0.663239 9.30925 1.26341 9.58348 2.00081C9.85771 2.73821 9.8313 3.55383 9.50993 4.27194C7.00175 9.21695 5.86939 14.7454 6.23146 20.2783C6.59353 25.8112 8.4367 31.145 11.5679 35.7209C16.5929 42.1319 20.5259 57.0599 15.9689 66.5339C15.6149 67.5869 15.2549 68.6579 14.9339 69.8069C14.7579 70.4372 14.3806 70.9926 13.8596 71.3886C13.3385 71.7845 12.7023 71.9992 12.0479 71.9999Z"
        fill="#B2CA7A"
      />
    </svg>
  ),
  Youtube: () => (
    <svg
      width="22"
      height="15"
      viewBox="0 0 22 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.1953 2.38281C21.6641 4.02344 21.6641 7.53906 21.6641 7.53906C21.6641 7.53906 21.6641 11.0156 21.1953 12.6953C20.9609 13.6328 20.2188 14.3359 19.3203 14.5703C17.6406 15 11 15 11 15C11 15 4.32031 15 2.64062 14.5703C1.74219 14.3359 1 13.6328 0.765625 12.6953C0.296875 11.0156 0.296875 7.53906 0.296875 7.53906C0.296875 7.53906 0.296875 4.02344 0.765625 2.38281C1 1.44531 1.74219 0.703125 2.64062 0.46875C4.32031 0 11 0 11 0C11 0 17.6406 0 19.3203 0.46875C20.2188 0.703125 20.9609 1.44531 21.1953 2.38281ZM8.8125 10.7031L14.3594 7.53906L8.8125 4.375V10.7031Z"
        fill="white"
      />
    </svg>
  ),
  Whatsapp: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 24L1.69627 17.8403C0.647564 16.0323 0.0974211 13.9848 0.103152 11.8916C0.103152 5.3327 5.46704 0 12.0516 0C15.2493 0 18.2521 1.23764 20.5043 3.48479C22.7622 5.73194 24.0057 8.72053 24 11.8973C24 18.4563 18.6361 23.789 12.0458 23.789H12.0401C10.0401 23.789 8.07449 23.2871 6.32664 22.3403L0 24ZM6.63037 20.1901L6.9914 20.4068C8.51575 21.308 10.2636 21.7814 12.0458 21.7871H12.0516C17.5243 21.7871 21.9828 17.3555 21.9828 11.903C21.9828 9.26236 20.9513 6.78137 19.0773 4.91065C17.2034 3.03992 14.7049 2.01331 12.0516 2.01331C6.57879 2.0076 2.12034 6.43916 2.12034 11.8916C2.12034 13.7567 2.64183 15.576 3.63897 17.1502L3.87392 17.5266L2.87106 21.1711L6.63037 20.1901Z"
        fill="white"
      />
      <path
        d="M0.418213 23.5836L2.05718 17.6349C1.04285 15.8954 0.509903 13.9163 0.509903 11.8973C0.515634 5.56645 5.69041 0.41626 12.0514 0.41626C15.1403 0.41626 18.0342 1.61398 20.2119 3.78128C22.3895 5.94858 23.5872 8.83451 23.5872 11.903C23.5872 18.2338 18.4067 23.3839 12.0514 23.3839H12.0457C10.1145 23.3839 8.21763 22.8992 6.53282 21.9866L0.418213 23.5836Z"
        fill="white"
      />
      <path
        d="M0 24L1.69627 17.8403C0.647564 16.0323 0.0974211 13.9848 0.103152 11.8916C0.103152 5.3327 5.46704 0 12.0516 0C15.2493 0 18.2521 1.23764 20.5043 3.48479C22.7622 5.73194 24.0057 8.72053 24 11.8973C24 18.4563 18.6361 23.789 12.0458 23.789H12.0401C10.0401 23.789 8.07449 23.2871 6.32664 22.3403L0 24ZM6.63037 20.1901L6.9914 20.4068C8.51575 21.308 10.2636 21.7814 12.0458 21.7871H12.0516C17.5243 21.7871 21.9828 17.3555 21.9828 11.903C21.9828 9.26236 20.9513 6.78137 19.0773 4.91065C17.2034 3.03992 14.7049 2.01331 12.0516 2.01331C6.57879 2.0076 2.12034 6.43916 2.12034 11.8916C2.12034 13.7567 2.64183 15.576 3.63897 17.1502L3.87392 17.5266L2.87106 21.1711L6.63037 20.1901Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.06576 6.91818C8.84226 6.42198 8.60731 6.41058 8.39527 6.40487C8.22335 6.39917 8.02278 6.39917 7.82221 6.39917C7.62163 6.39917 7.30072 6.47331 7.02565 6.76989C6.75057 7.06647 5.98267 7.7851 5.98267 9.25088C5.98267 10.711 7.0543 12.1254 7.2033 12.325C7.35229 12.5246 9.27206 15.6216 12.3036 16.8136C14.8251 17.806 15.3408 17.6064 15.8852 17.5551C16.4297 17.5037 17.6503 16.8364 17.9024 16.1406C18.1488 15.4448 18.1488 14.8516 18.0743 14.7262C17.9998 14.6007 17.7993 14.5265 17.5013 14.3783C17.2033 14.23 15.7362 13.5113 15.4612 13.4087C15.1861 13.3117 14.9855 13.2604 14.7907 13.557C14.5901 13.8535 14.017 14.5208 13.8451 14.7205C13.6732 14.9201 13.4956 14.9429 13.1976 14.7946C12.8996 14.6463 11.9368 14.3326 10.7964 13.3174C9.90816 12.5303 9.30645 11.5551 9.13453 11.2585C8.96261 10.9619 9.11733 10.8022 9.26633 10.6539C9.39814 10.5227 9.56433 10.306 9.71332 10.1349C9.86232 9.96381 9.91389 9.83833 10.0113 9.63871C10.1087 9.43909 10.0629 9.26799 9.98839 9.1197C9.9139 8.97712 9.32937 7.50563 9.06576 6.91818Z"
        fill="#475131"
      />
    </svg>
  ),
};
