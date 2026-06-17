<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class PeacMarkIssued extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public string $schoolName,
        public string $certCheckUrl,
        public string $publicVerifyUrl,
        public string $unsubscribeUrl,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Your PEACMark is Now Live',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.peacmark_issued',
        );
    }
}