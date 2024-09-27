'use client'
import Image from 'next/image'
import styles from './Header.module.css'
import {Images} from '@/theme'
import {headerMenu} from '@/config/Constants'
import {useReducer, useState} from 'react'
import {RiArrowRightSLine} from 'react-icons/ri'
import {SlMenu} from 'react-icons/sl'
import AppUtil from '@/util/AppUtil'
import {useRouter} from 'next/navigation'

const Header = () => {
  const router = useRouter()
  const [showMobileMenu, toggleMobileMenu] = useReducer(
    (isShown) => !isShown,
    false,
  )
  const [showSubMenu, toggleShowSubMenu] = useReducer(
    (isShown) => !isShown,
    false,
  )
  const {width} = AppUtil.useWindowDimensions()
  const handleSubMenu = (item: {
    id: number | string
    title: string
    subList?: Array<{id: string; title: string}>
    linkTo?: string
  }) => {
    if (item?.subList && item?.subList?.length > 0) {
      toggleShowSubMenu()
    } else {
      item?.linkTo && router.push(item?.linkTo)
      toggleMobileMenu()
    }
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => router.push('/')}>
        <Image
          src={Images.header.logo}
          alt="Şirket Logosu"
          width={200}
          height={60}
          objectFit="contain"
          priority={true}
        />
      </div>

      <button
        onClick={() => toggleMobileMenu()}
        className={styles.hamburgerMenuButton}
      >
        <SlMenu />
      </button>

      {(width > 768 || showMobileMenu) && (
        <div className={styles.menuContainer}>
          {headerMenu?.map((item) => {
            if (item?.subList) {
              return (
                <div key={item?.id} className={styles.servicesButton}>
                  <button onClick={() => handleSubMenu(item)}>
                    <p>{item.title}</p>
                  </button>
                  {showSubMenu && (
                    <div
                      className={styles.subMenu}
                      onMouseLeave={toggleShowSubMenu}
                    >
                      {item.subList?.map((subItem) => {
                        return (
                          <button
                            key={subItem.id}
                            onClick={() => handleSubMenu(subItem)}
                          >
                            <RiArrowRightSLine className={styles.arrow} />
                            <p>{subItem.title}</p>
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            } else {
              return (
                <button key={item?.id} onClick={() => handleSubMenu(item)}>
                  <p>{item.title}</p>
                </button>
              )
            }
          })}
        </div>
      )}
    </header>
  )
}
export default Header
