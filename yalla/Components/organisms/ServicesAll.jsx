import React from 'react';
import ServicesMoli from '../moleculus/ServicesMoli';
import AnchorTag from '../atoms/AnchorTag';
import Headermain from './Headermain';
import Heading from '../atoms/Heading';
import { MdArrowOutward } from 'react-icons/md';
import Paragraph from '../atoms/Paragraph';
import Container from '../atoms/Container';

function ServicesAll() {
  return (
    <div>
      <div><Headermain/></div>
      <div className="baner-bg">
        <div className="py-[15%] px-[3%] grid gap-9 ">
          <div className="grid text-center gap-6 ">
            <Heading level="1">Our Services</Heading>
          </div>
        </div>
      </div>
      <div className='text-center py-[50px]'>
        <Heading level='2'>Service overview</Heading>
        <Paragraph variant='homepara'>There are five main types of plumbing pipe materials that are still in use today <br/> copper galvanized steel.</Paragraph>
      </div>
    <Container>
    <div className='grid grid-cols-2 gap-[20px]'>
        <AnchorTag href=''>
          <ServicesMoli src='/assits/images/plumber/paint.jpg' headeing='Paint Works' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
        </AnchorTag>
        <AnchorTag href=''>
          <ServicesMoli src='/assits/images/plumber/bath.jpg' headeing='Bathroom Renovation' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
        </AnchorTag>
        <AnchorTag href=''>
          <ServicesMoli src='/assits/images/plumber/celling.jpg' headeing='Celling' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
        </AnchorTag>
        <AnchorTag href=''>
          <ServicesMoli src='/assits/images/plumber/acclean.jpg' headeing='AC Deep Cleaning' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
        </AnchorTag>
        <AnchorTag href=''>
          <ServicesMoli src='/assits/images/plumber/partition.jpg' headeing='Gypsum Partition' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
        </AnchorTag>
        <AnchorTag href=''>
          <ServicesMoli src='/assits/images/plumber/plumber.png' headeing='Plumbing Works' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
        </AnchorTag>
        <AnchorTag href=''>
          <ServicesMoli src='/assits/images/plumber/taile.jpg' headeing='Tile Fixing' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
        </AnchorTag>
        <AnchorTag href=''>
          <ServicesMoli src='/assits/images/plumber/kiten.jpg' headeing='Kitchen Renovation' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
        </AnchorTag>
        <AnchorTag href=''>
          <ServicesMoli src='/assits/images/plumber/glass.jpg' headeing='Glass Works' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
        </AnchorTag>
        <AnchorTag href=''>
          <ServicesMoli src='/assits/images/plumber/ele.jpg' headeing='Electrical Works' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
        </AnchorTag>
          </div>
    </Container>

    </div>
  );
}

export default ServicesAll;
