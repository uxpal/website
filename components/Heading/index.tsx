import { useState } from 'react';

import styled from '@emotion/styled';
import { Button, Modal, TextInput, Checkbox, Group, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm, isEmail } from '@mantine/form';
import { notifications } from '@mantine/notifications';

import { useFormspark } from '@formspark/use-formspark';

import Image from 'next/image';
import Link from 'next/link';
import UXPal from './images/UXPal.svg';

const StyledHeading = styled.div`
  max-width: ${rem(1200)};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${rem(24)};
  }

  & > .copy {
    margin-top: ${rem(36)};
    padding: ${rem(0)} ${rem(20)} ${rem(0)} ${rem(20)};
    margin-bottom: ${rem(24)};

    @media only screen and (min-width: 768px) {
      margin-top: ${rem(0)};
      padding: ${rem(0)} ${rem(0)} ${rem(0)} ${rem(40)};
    }

    @media only screen and (min-width: 1220px) {
      padding-left: ${rem(0)};
    }

    & > .uxpal-badge {
      width: ${rem(128)};
      border-radius: ${rem(10)};
      padding: ${rem(10)};
      background-color: ${({ theme }) => theme.colors.gray[0]};
      text-align: center;
      font-size: ${rem(18)};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.violet[6]};
    }

    & > h1 {
      font-size: ${rem(28)};
      font-weight: 600;

      @media only screen and (min-width: 768px) {
        font-size: ${rem(36)};
      }

      @media only screen and (min-width: 1220px) {
        font-size: ${rem(44)};
      }
    }
    & > p {
      color: ${({ theme }) => theme.colors.dark[3]};
      margin-bottom: ${rem(24)};
    }
  }

  & > .image {
    & > img {
      max-width: 100%;
      height: ${rem(384)};
      background-size: contain;

      @media only screen and (min-width: 768px) {
        height: ${rem(768)};
      }
    }
  }
`;

const StyledModal = styled.div`
  & > p {
    margin-bottom: ${rem(24)};
  }

  a {
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: none;
  }
`;

const FORMSPARK_FORM_ID = 'TZG0uyw8';

const Heading = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const form = useForm({
    initialValues: {
      email: '',
      privacy: false,
    },

    validate: {
      email: isEmail('Invalid Email'),
      privacy: (value) => {
        if (!value) return 'Please agree to our privacy policy before submitting';
        return null;
      },
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {
          form.reset();
          close();
        }}
        size="lg"
        title="Get Early Access"
        centered
      >
        <StyledModal>
          <p className="sm">
            Thank you for expressing your interest in UXPal. Please provide your email address in
            the box below and We&apos;ll make sure to keep you in the loop with exclusive updates,
            sneak peeks, and priority access to UXPal as soon as it&apos;s ready.
          </p>
          <form
            onSubmit={form.onSubmit(async (values) => {
              try {
                await submit({ message: values.email });
                notifications.show({
                  color: 'green',
                  title: 'Thank you!',
                  message:
                    'Your email have been successfully submitted and we will be in touch with you as soon as UXPal is ready',
                });
                form.reset();
                close();
              } catch {
                notifications.show({
                  color: 'red',
                  title: 'Oops something went wrong!',
                  message:
                    'Unfortunately we were unable to receive your email. Please try again. If you are still unable to submit your email please get in touch with us at contact@uxpal.ai ',
                });
                form.reset();
                close();
              }
            })}
          >
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
            />

            <Checkbox
              mt="md"
              label={
                <>
                  I agree to{' '}
                  <Link href="/privacy-policy" target="_blank">
                    privacy policy
                  </Link>
                </>
              }
              {...form.getInputProps('privacy', { type: 'checkbox' })}
            />
            <Group position="right" mt="md">
              <Button type="submit" loading={submitting}>
                Submit
              </Button>
            </Group>
          </form>
        </StyledModal>
      </Modal>
      <StyledHeading>
        <div className="copy">
          <div className="uxpal-badge">Meet UXPal</div>
          <h1>Your AI Powered User Experience Co-Pilot</h1>
          <p>
            Working right beside you. Ready to turn the complex design process into an exciting,
            collaborative adventure. Always making sure every decision leads to an outstanding user
            experience.
          </p>
          <Button size="xl" fullWidth onClick={open}>
            Get Early Access
          </Button>
        </div>
        <div className="image">
          <Image src={UXPal} alt="UXPal your trusty AI powered user experience co pilot." />
        </div>
      </StyledHeading>
    </>
  );
};

export default Heading;
