import clsx from 'clsx';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <svg
      width="217"
      height="46"
      viewBox="0 0 217 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, 'text-primary')}
    >
      <path
        d="M14.7896 33.7501H7.61655C7.47323 33.7501 7.33133 33.779 7.19908 33.8352C7.06683 33.8914 6.94684 33.9737 6.84609 34.0774C6.74533 34.181 6.6658 34.304 6.61211 34.4392C6.55841 34.5744 6.53162 34.7191 6.53328 34.8649V37.0689C6.53328 37.2136 6.5613 37.3569 6.61573 37.4906C6.67017 37.6243 6.74997 37.7458 6.85056 37.8482C6.95115 37.9505 7.07057 38.0317 7.202 38.0871C7.33343 38.1424 7.47429 38.1709 7.61655 38.1709H12.6356C12.9175 38.165 13.1861 38.0475 13.3842 37.8433L15.5508 35.6393C15.7068 35.4867 15.8141 35.29 15.8588 35.0746C15.9036 34.8592 15.8836 34.6351 15.8015 34.4314C15.7194 34.2277 15.579 34.0538 15.3986 33.9323C15.2181 33.8108 15.0059 33.7473 14.7896 33.7501V33.7501Z"
        fill="currentColor"
      />
      <path
        d="M20.7327 27.1045H1.0289C0.756017 27.1045 0.494313 27.2148 0.301357 27.4111C0.108401 27.6074 0 27.8736 0 28.1512L0 43.7029C0.00110156 43.9937 0.115145 44.2723 0.317275 44.4779C0.519405 44.6835 0.793235 44.7996 1.07909 44.8007H3.34601C3.63259 44.8007 3.90749 44.6852 4.11052 44.4794C4.31356 44.2737 4.42817 43.9944 4.42928 43.7029V32.6061C4.42873 32.4616 4.45624 32.3184 4.51022 32.1847C4.5642 32.051 4.6436 31.9295 4.74386 31.8271C4.84411 31.7247 4.96326 31.6435 5.09445 31.588C5.22565 31.5326 5.36631 31.5041 5.50837 31.5041H20.7327C20.8746 31.5046 21.0151 31.4766 21.1463 31.4217C21.2775 31.3667 21.3967 31.2859 21.497 31.1838C21.5973 31.0818 21.6768 30.9605 21.7308 30.8271C21.7848 30.6936 21.8124 30.5506 21.8118 30.4063V28.2023C21.8124 28.0579 21.7848 27.9149 21.7308 27.7815C21.6768 27.6481 21.5973 27.5268 21.497 27.4248C21.3967 27.3227 21.2775 27.2419 21.1463 27.1869C21.0151 27.1319 20.8746 27.1039 20.7327 27.1045V27.1045Z"
        fill="currentColor"
      />
      <path
        d="M44.7738 27.1045H25.024C24.7511 27.1045 24.4894 27.2148 24.2965 27.4111C24.1035 27.6074 23.9951 27.8736 23.9951 28.1512V43.754C23.9951 44.0316 24.1035 44.2978 24.2965 44.4941C24.4894 44.6904 24.7511 44.8007 25.024 44.8007H27.3788C27.6517 44.8007 27.9134 44.6904 28.1063 44.4941C28.2993 44.2978 28.4077 44.0316 28.4077 43.754V32.555C28.4088 32.2766 28.518 32.01 28.7115 31.8131C28.905 31.6163 29.1671 31.5052 29.4407 31.5041H34.5769C34.7804 31.5052 34.9791 31.5674 35.148 31.6829C35.3169 31.7985 35.4484 31.9622 35.5262 32.1536C35.6039 32.3449 35.6244 32.5554 35.5849 32.7585C35.5455 32.9617 35.448 33.1484 35.3046 33.2954L35.1582 33.4443C34.9644 33.6394 34.7031 33.7494 34.4305 33.7507H31.5571C31.2849 33.7518 31.0243 33.8626 30.8323 34.0587C30.6402 34.2549 30.5324 34.5205 30.5324 34.7974V37.1035C30.5324 37.3815 30.6407 37.6482 30.8335 37.8452C31.0263 38.0421 31.288 38.1534 31.5613 38.1545H35.9697C36.2443 38.1532 36.5074 38.0416 36.7016 37.8439L45.4849 28.8873C45.6265 28.7417 45.723 28.5571 45.7625 28.3563C45.802 28.1555 45.7827 27.9473 45.707 27.7575C45.6313 27.5677 45.5026 27.4047 45.3367 27.2886C45.1708 27.1725 44.9751 27.1085 44.7738 27.1045V27.1045Z"
        fill="currentColor"
      />
      <path
        d="M68.7692 27.1045H49.0194C48.7461 27.1045 48.484 27.2147 48.2904 27.4108C48.0968 27.607 47.9874 27.8732 47.9863 28.1512V30.4574C47.9874 30.7354 48.0968 31.0016 48.2904 31.1978C48.484 31.394 48.7461 31.5041 49.0194 31.5041H66.5023C66.7751 31.5037 67.0368 31.3936 67.2301 31.1977L69.497 28.9086C69.6447 28.7623 69.746 28.5745 69.788 28.3692C69.8299 28.1638 69.8105 27.9505 69.7322 27.7565C69.6539 27.5625 69.5204 27.3967 69.3488 27.2805C69.1772 27.1643 68.9754 27.1031 68.7692 27.1045V27.1045Z"
        fill="currentColor"
      />
      <path
        d="M70.9357 40.3965H68.6646C68.0964 40.3965 67.6357 40.8651 67.6357 41.4432V43.7536C67.6357 44.3317 68.0964 44.8003 68.6646 44.8003H70.9357C71.504 44.8003 71.9646 44.3317 71.9646 43.7536V41.4432C71.9646 40.8651 71.504 40.3965 70.9357 40.3965Z"
        fill="currentColor"
      />
      <path
        d="M94.2154 31.1381L91.9485 33.4442C91.7559 33.6409 91.6477 33.907 91.6473 34.1846V34.9505C91.6473 35.2281 91.5389 35.4943 91.346 35.6906C91.153 35.8869 90.8913 35.9972 90.6184 35.9972H89.8656C89.5928 35.9975 89.3311 36.1076 89.1378 36.3035L86.8709 38.6097C86.7269 38.7561 86.6289 38.9426 86.5891 39.1457C86.5494 39.3488 86.5698 39.5593 86.6477 39.7506C86.7256 39.942 86.8575 40.1055 87.0268 40.2205C87.1961 40.3355 87.3951 40.3968 87.5987 40.3967H90.6184C90.8917 40.3979 91.1534 40.5091 91.3462 40.7061C91.5391 40.903 91.6473 41.1697 91.6473 41.4477V43.7539C91.6473 44.0315 91.7557 44.2977 91.9487 44.494C92.1417 44.6903 92.4034 44.8006 92.6762 44.8006H94.9432C95.2164 44.8006 95.4786 44.6904 95.6722 44.4943C95.8658 44.2981 95.9751 44.0319 95.9762 43.7539V31.8869C95.9768 31.6791 95.9168 31.4759 95.8039 31.3027C95.6909 31.1296 95.5301 30.9945 95.3416 30.9143C95.1532 30.8342 94.9456 30.8127 94.7452 30.8525C94.5447 30.8923 94.3604 30.9917 94.2154 31.1381V31.1381Z"
        fill="currentColor"
      />
      <path
        d="M93.5753 27.1046H89.9532C89.6804 27.105 89.4188 27.2151 89.2255 27.411L73.8924 43.0138C73.7484 43.1601 73.6504 43.3467 73.6106 43.5498C73.5709 43.7529 73.5913 43.9634 73.6692 44.1547C73.7471 44.346 73.879 44.5096 74.0483 44.6246C74.2176 44.7396 74.4166 44.8009 74.6202 44.8008H78.2422C78.515 44.8005 78.7767 44.6903 78.97 44.4945L94.3031 28.9087C94.4529 28.7633 94.5562 28.5753 94.5993 28.3693C94.6425 28.1632 94.6235 27.9487 94.5449 27.7538C94.4663 27.5589 94.3317 27.3927 94.1587 27.2769C93.9857 27.161 93.7824 27.101 93.5753 27.1046V27.1046Z"
        fill="currentColor"
      />
      <path
        d="M101.472 27.1045H99.2008C98.6325 27.1045 98.1719 27.5731 98.1719 28.1512V43.754C98.1719 44.332 98.6325 44.8007 99.2008 44.8007H101.472C102.04 44.8007 102.501 44.332 102.501 43.754V28.1512C102.501 27.5731 102.04 27.1045 101.472 27.1045Z"
        fill="currentColor"
      />
      <path
        d="M60.1066 33.7422H57.8355C57.2673 33.7422 56.8066 34.2108 56.8066 34.7889V43.754C56.8066 44.3321 57.2673 44.8007 57.8355 44.8007H60.1066C60.6749 44.8007 61.1355 44.3321 61.1355 43.754V34.7889C61.1355 34.2108 60.6749 33.7422 60.1066 33.7422Z"
        fill="currentColor"
      />
      <path
        d="M115.647 0.400391C114.49 0.400391 113.38 0.867951 112.562 1.70021C111.744 2.53248 111.284 3.66127 111.284 4.83826C111.284 5.46986 111.418 6.09403 111.678 6.66788L103.63 13.6885C102.692 12.976 101.552 12.591 100.381 12.5907H100.305L99.6068 9.67184C100.358 9.18354 100.914 8.43985 101.177 7.5732C101.44 6.70656 101.392 5.7732 101.041 4.93933C100.691 4.10546 100.061 3.4252 99.2632 3.01967C98.4658 2.61414 97.5528 2.50967 96.6868 2.72485C95.8208 2.94003 95.058 3.46091 94.5341 4.19473C94.0103 4.92855 93.7595 5.82768 93.8263 6.73203C93.8932 7.63639 94.2733 8.48725 94.8991 9.13314C95.5249 9.77902 96.3558 10.178 97.2437 10.259L97.938 13.1651C97.0885 13.5971 96.3651 14.2478 95.8397 15.0525C95.3143 15.8572 95.0053 16.7879 94.9433 17.7519L90.146 18.505C89.7019 17.5353 88.9287 16.7612 87.9685 16.3249C87.0083 15.8886 85.9256 15.8195 84.9193 16.1303C83.913 16.4411 83.0508 17.1109 82.4911 18.0166C81.9314 18.9224 81.7118 20.0031 81.8727 21.0604C82.0335 22.1176 82.564 23.0803 83.3667 23.7714C84.1694 24.4626 85.1903 24.8359 86.2418 24.8227C87.2934 24.8095 88.3049 24.4106 89.0905 23.6994C89.8761 22.9883 90.3831 22.0126 90.5182 20.9516L95.3114 20.1985C95.6036 20.9548 96.0561 21.6362 96.6366 22.1944C97.2171 22.7526 97.9114 23.1738 98.6701 23.4281C99.4288 23.6824 100.233 23.7635 101.026 23.6657C101.819 23.5679 102.581 23.2935 103.258 22.8621L107.441 27.1595C106.935 28.0937 106.778 29.1821 106.997 30.2248C107.217 31.2675 107.799 32.1945 108.637 32.8356C109.475 33.4767 110.512 33.7888 111.557 33.7146C112.603 33.6405 113.588 33.185 114.33 32.4318C115.072 31.6787 115.522 30.6784 115.597 29.6148C115.673 28.5512 115.369 27.4955 114.74 26.6418C114.112 25.788 113.202 25.1935 112.178 24.9674C111.154 24.7412 110.083 24.8987 109.164 25.4108L104.981 21.1176C105.492 20.2963 105.781 19.3526 105.819 18.3815C105.857 17.4105 105.643 16.4463 105.199 15.5862L113.263 8.54855C113.831 8.92524 114.478 9.16182 115.152 9.23946C115.826 9.31711 116.508 9.23368 117.145 8.99581C117.781 8.75794 118.355 8.37219 118.819 7.86927C119.283 7.36634 119.626 6.76012 119.819 6.09883C120.013 5.43755 120.052 4.73945 119.933 4.06008C119.815 3.38071 119.542 2.73883 119.137 2.18551C118.732 1.63218 118.206 1.18268 117.6 0.872783C116.994 0.562881 116.325 0.401127 115.647 0.400391V0.400391Z"
        fill="currentColor"
      />
    </svg>
  );
}
