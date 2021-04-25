import { MenuToggle } from '@components/icons';
import { Logo, ThemeToggle } from '@components/ui';
import {
  BodyScrollOptions,
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';

import styles from './Navbar.module.scss';
import NavItems from './NavItems';

const BODY_SCROLL_OPTIONS: BodyScrollOptions = {
  reserveScrollBarGap: true,
};

type NavbarProps = {
  isTransparent?: boolean;
};

const Navbar: FC<NavbarProps> = ({ children, isTransparent = false }) => {
  const router = useRouter();

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (router.asPath) {
      setNavDrawerOpen(false);
    }
  }, [router.asPath]);

  useEffect(() => {
    if (ref.current) {
      if (navDrawerOpen) {
        disableBodyScroll(ref.current, BODY_SCROLL_OPTIONS);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [navDrawerOpen]);

  return (
    <header
      className={cx(styles.header, {
        [styles.headerTransparent]: isTransparent,
        [styles.navContainerOpen]: navDrawerOpen,
      })}
      ref={ref}
    >
      {children}
      <div className={cx(styles.headerContainer, 'container-lg')}>
        <nav
          className={cx(styles.navigation, {
            [styles.navigationTransparent]: isTransparent,
          })}
        >
          <div className={cx(styles.toolbar)}>
            <Link href="/">
              <Logo className={styles.logo} />
            </Link>
            <div className={cx(styles.toolbarIcons)}>
              <ThemeToggle
                className={cx('buttonReset', styles.toolbarGeneralIcon, {
                  [styles.menuButtonTransparent]: isTransparent,
                })}
              />
              <MenuToggle
                className={cx('buttonReset', styles.hamburger, {
                  [styles.menuButtonTransparent]: isTransparent,
                })}
                handleToggle={() =>
                  setNavDrawerOpen((prevNavDrawerOpen) => !prevNavDrawerOpen)
                }
              />
            </div>
            <NavItems
              isTransparent={isTransparent}
              navDrawerOpen={navDrawerOpen}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
