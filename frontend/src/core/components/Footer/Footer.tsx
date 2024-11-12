import CompanyInfor from './CompanyInfor'
import FooterBottom from './FooterBottom'
import FooterDetail from './FooterDetail'
import FooterForm from './FooterForm'

const Footer = () => {
  return (
    <footer className="w-full h-[500px] bg-bg mt-8 border-border border-solid border-t-2">
      <div className="max-w-[1400px] m-auto pt-24 pb-10 flex gap-x-40 px-4 border-solid border-b-2">
        <CompanyInfor />

        <div>
          <FooterDetail />
          <FooterForm />
        </div>
      </div>

      <FooterBottom />
    </footer>
  )
}

export default Footer