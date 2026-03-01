import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Row,
    Column,
} from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
    firstName: string;
    lastName: string;
    senderEmail: string;
    message: string;
}

export default function ContactEmail({
    firstName,
    lastName,
    senderEmail,
    message,
}: ContactEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from {firstName} {lastName} via your portfolio</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header */}
                    <Section style={header}>
                        <Heading style={headerTitle}>Portfolio Contact</Heading>
                        <Text style={headerSubtitle}>New message received</Text>
                    </Section>

                    {/* Sender Info */}
                    <Section style={senderSection}>
                        <Row>
                            <Column>
                                <Text style={label}>FROM</Text>
                                <Text style={value}>{firstName} {lastName}</Text>
                            </Column>
                            <Column>
                                <Text style={label}>EMAIL</Text>
                                <Text style={value}>{senderEmail}</Text>
                            </Column>
                        </Row>
                    </Section>

                    <Hr style={divider} />

                    {/* Message */}
                    <Section style={messageSection}>
                        <Text style={label}>MESSAGE</Text>
                        <Text style={messageText}>{message}</Text>
                    </Section>

                    <Hr style={divider} />

                    {/* Footer */}
                    <Text style={footer}>
                        This message was sent via the contact form on your portfolio.
                        Reply directly to {senderEmail} to respond.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const main: React.CSSProperties = {
    backgroundColor: '#0f172a',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    padding: '40px 0',
};

const container: React.CSSProperties = {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    maxWidth: '560px',
    margin: '0 auto',
    overflow: 'hidden',
    border: '1px solid #334155',
};

const header: React.CSSProperties = {
    background: 'linear-gradient(135deg, #0d9488, #06b6d4)',
    padding: '32px 40px',
};

const headerTitle: React.CSSProperties = {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '800',
    margin: '0 0 4px',
    letterSpacing: '-0.5px',
};

const headerSubtitle: React.CSSProperties = {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '14px',
    margin: 0,
};

const senderSection: React.CSSProperties = {
    padding: '24px 40px 0',
};

const label: React.CSSProperties = {
    color: '#64748b',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
    margin: '0 0 4px',
};

const value: React.CSSProperties = {
    color: '#e2e8f0',
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 16px',
};

const divider: React.CSSProperties = {
    borderColor: '#334155',
    margin: '0 40px',
};

const messageSection: React.CSSProperties = {
    padding: '24px 40px',
};

const messageText: React.CSSProperties = {
    color: '#cbd5e1',
    fontSize: '15px',
    lineHeight: '1.7',
    margin: '4px 0 0',
    whiteSpace: 'pre-wrap' as const,
};

const footer: React.CSSProperties = {
    color: '#475569',
    fontSize: '12px',
    lineHeight: '1.6',
    padding: '0 40px 24px',
    margin: 0,
};
