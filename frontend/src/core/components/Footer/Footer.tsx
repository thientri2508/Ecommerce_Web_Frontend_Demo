import CompanyInfor from './CompanyInfor'
import FooterBottom from './FooterBottom'
import FooterDetail from './FooterDetail'
import FooterForm from './FooterForm'

const Footer = () => {
  return (
    <footer className="w-full bg-bg mt-8 border-border border-solid border-t-2">
      <div className="max-w-[1450px] m-auto pt-8 lg:pt-24 pb-10 flex flex-col-reverse xl:flex-row px-12 lg:px-28 xl:px-14 border-solid border-b-2 gap-8 lg:gap-20">
        <CompanyInfor />

        <div className='flex flex-col items-center xl:items-start ml-0 xl+:ml-28'>
          <FooterDetail />
          <FooterForm />
        </div>
      </div>

      <FooterBottom />
    </footer>
  )
}

export default Footer