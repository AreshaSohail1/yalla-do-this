import React from 'react';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Map from '../moleculus/Map';

function Contact() {
  return (
    <div>
      <Container>
        <div className='flex '>
          <div className='pt-[4%] '>
            <img className='w-[600px]' src="/assits/images/contact.jpg" alt="" />
          <div className=' '>
            <Heading level='3'>Need to connect with a specific office?</Heading>
            <div className=''>
            <Paragraph variant='contact'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut expedita, officia quibusdam voluptatibus blanditiis laudantium. Asperiores id, aliquam est praesentium, vel molestias esse itaque quae error magni temporibus, soluta provident?</Paragraph>
            </div>
          </div>
          </div>

          <div className='w-full '>
            <form>
              <div className='flex gap-[30px]'>
              <div className="pt-[15px] w-[50%]">
                <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                  <Label> Name</Label>
                </div>
                <Input variant='five' placeholder="Name" type="text" />
              </div>
              <div className="pt-[15px] w-[50%]">
                <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                  <Label> Company</Label>
                </div>
                <Input variant='five' placeholder="company" type="text" />
              </div>
              </div>
              <div className='flex gap-[30px]'>
              <div className="pt-[15px] w-[50%]">
                <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                  <Label> Phone</Label>
                </div>
                <Input variant='five' placeholder="Phone" type="number" />
              </div>

              <div className="pt-[20px] w-[50%]">
                <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                  <Label>Your Email </Label>
                </div>
                <Input variant="five" type="email" placeholder="Email" />
              </div>
              </div>

              <div className="pt-[20px] w-full">
                <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                  <Label>Subject</Label>
                </div>
                <Input variant="five" type="text" placeholder="Subject" />
              </div>

              <div className="pt-[20px] w-full">
                <div className='font-semibold text-[14px] mb-[10px] text-[#242424]'>
                  <Label>Message</Label>
                </div>
                <textarea className='w-full h-[100px] outline-none border border-[#cacaca] text-[15px] text-[#302e2e] p-[15px]' placeholder="Message" />
              </div>
              
              <div className="pt-5">
                <button type="submit" className="bg-[#F35748] h-[40px]  hover:bg-[#242424] hover:text-white cursor-pointer font-medium text-[16px] text-center w-[100%] py-2 px-6 text-white">Send Message</button>
              </div>
            </form>
          </div>
         
        </div>
      </Container>
      <Map/>
    </div>
  );
}

export default Contact;
