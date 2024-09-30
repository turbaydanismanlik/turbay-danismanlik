import React, {useState} from 'react'
import {useForm} from '@formspree/react'
import styles from './DanismanlikTalepFormu.module.css'

const DanismanlikTalepFormu = () => {
  const [state, handleSubmit]: any = useForm('mldrqpvq')
  const [errors, setErrors] = useState({
    ad: '',
    soyadi: '',
    telefon: '',
    email: '',
    'sirket-unvani': '',
    'talep-detayi': '',
  })
  const [isFormValid, setIsFormValid] = useState(false)

  const handleValidation = (field: string, value: string) => {
    let text =
      field == 'ad'
        ? 'Ad'
        : field == 'soyadi'
        ? 'Soyadı'
        : field == 'sirket-unvani'
        ? 'Şirket Ünvanı'
        : field == 'talep-detayi'
        ? 'Talep Detayı'
        : field.charAt(0).toUpperCase() + field.slice(1)

    let error = ''
    switch (field) {
      case 'email':
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
        if (!emailPattern.test(value)) {
          error = 'Lütfen geçerli bir e-posta giriniz. (example@domain.com)'
        }
        break
      case 'telefon':
        const phonePattern = /^\+90[5-9][0-9]{9}$/
        if (!phonePattern.test(value)) {
          error = 'Lütfen geçerli bir telefon numarası giriniz. (+905xxxxxxxxx)'
        }
        break
      default:
        if (value.trim() === '') {
          error = `${text} alanı zorunludur.`
        }
    }
    setErrors((prev) => ({...prev, [field]: error}))
    validateForm()
  }

  const validateForm = () => {
    const hasErrors = Object.values(errors).some((error) => error !== '')
    const hasEmptyFields = Object.values(errors).some(
      (error, index) => error === '' && state[index] === '',
    )
    setIsFormValid(!hasErrors && !hasEmptyFields)
  }

  if (state.succeeded) {
    return (
      <p className={styles.successMessage}>
        Talebiniz iletilmiştir. Bizimle iletişime geçtiğiniz için teşekkür
        ederiz.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.rowContainers}>
        <div className={styles.inputContainer}>
          <label htmlFor="ad">Ad</label>
          <input
            id="ad"
            type="text"
            name="ad"
            required
            onChange={(e) => handleValidation('ad', e.target.value)}
          />
          {errors.ad && <p className={styles.error}>{errors.ad}</p>}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="soyadi">Soyadı</label>
          <input
            id="soyadi"
            type="text"
            name="soyadi"
            required
            onChange={(e) => handleValidation('soyadi', e.target.value)}
          />
          {errors.soyadi && <p className={styles.error}>{errors.soyadi}</p>}
        </div>
      </div>
      <div className={styles.rowContainers}>
        <div className={styles.inputContainer}>
          <label htmlFor="telefon">Telefon Numarası</label>
          <input
            id="telefon"
            type="tel"
            name="telefon"
            required
            onChange={(e) => handleValidation('telefon', e.target.value)}
          />
          {errors.telefon && <p className={styles.error}>{errors.telefon}</p>}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">E-Posta</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            onChange={(e) => handleValidation('email', e.target.value)}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="sirket-unvani">Şirket Ünvanı</label>
        <input
          id="sirket-unvani"
          type="text"
          name="sirket-unvani"
          required
          onChange={(e) => handleValidation('sirket-unvani', e.target.value)}
        />
        {errors['sirket-unvani'] && (
          <p className={styles.error}>{errors['sirket-unvani']}</p>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="talep-detayi">Talep Detayı</label>
        <textarea
          id="talep-detayi"
          name="talep-detayi"
          rows={15}
          required
          onChange={(e) => handleValidation('talep-detayi', e.target.value)}
        />
        {errors['talep-detayi'] && (
          <p className={styles.error}>{errors['talep-detayi']}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={state.submitting || !isFormValid}
        style={state.submitting || !isFormValid ? {opacity: 0.5} : {}}
      >
        Gönder
      </button>
    </form>
  )
}

export default DanismanlikTalepFormu
